const express = require("express");
const path = require("path");
const { DateTime } = require('luxon');
require('dotenv').config()

const PORT = process.env.PORT || 3001;
const calendarId = process.env.CALENDAR_ID || 'primary';

const app = express();

const sqlite3 = require("sqlite3").verbose();
const { google } = require('googleapis');
const calendar = google.calendar('v3');

const { GoogleAuth } = require('google-auth-library');
const authClient = new GoogleAuth({
  keyFile: 'arise-calendar-api.json',
  scopes: ['https://www.googleapis.com/auth/calendar']
});

const weekendAppointments = false;
const startTime = "09:00:00";
const endTime = "17:00:00";
const intervalTime = 30;

async function getAllAvailableTimeSlots(month, year, weekend, start, end, interval) {
  const client = await authClient.getClient();
  const today = DateTime.local().setZone('Africa/Johannesburg');
  const daysInMonth = DateTime.local(year, month).daysInMonth;

  const timeMin = DateTime.local(year, month, 1).toISO();
  const timeMax = DateTime.local(year, month, daysInMonth, 23, 59, 59).toISO();

  const res = await calendar.events.list({
    auth: client,
    calendarId,
    timeMin,
    timeMax,
    singleEvents: true,
    orderBy: 'startTime',
  });

  const events = res.data.items || [];

  // Group events by day
  const eventsByDay = {};
  for (const event of events) {
    const startTime = DateTime.fromISO(event.start.dateTime || event.start.date, { zone: 'Africa/Johannesburg' });
    const endTime = DateTime.fromISO(event.end.dateTime || event.end.date, { zone: 'Africa/Johannesburg' });
    const day = startTime.day;
    if (!eventsByDay[day]) eventsByDay[day] = [];
    eventsByDay[day].push({ start: startTime, end: endTime });
  }

  const generateSlots = (dayDate) => {
    const slots = [];
    let slotTime = dayDate.set({
      hour: parseInt(start.split(':')[0]),
      minute: parseInt(start.split(':')[1])
    });

    const endTimeObj = dayDate.set({
      hour: parseInt(end.split(':')[0]),
      minute: parseInt(end.split(':')[1])
    });

    while (slotTime < endTimeObj) {
      slots.push(slotTime.toFormat('HH:mm'));
      slotTime = slotTime.plus({ minutes: interval });
    }
    return slots;
  };

  const isSlotFree = (slotTime, busyList) => {
    for (const busy of busyList) {
      if (slotTime >= busy.start && slotTime < busy.end) return false;
    }
    return true;
  };

  const availableDays = [];
  let activated = false;

  for (let day = 1; day <= daysInMonth; day++) {
    const dayDate = DateTime.local(year, month, day).setZone('Africa/Johannesburg');
    const isPast = dayDate < today.startOf('day');
    const isWeekendDay = [6, 7].includes(dayDate.weekday);
    const spec = isPast
    ? 'current-disabled'
    : dayDate.hasSame(today.startOf('day'), 'day')
      ? 'today'
      : '';

    let slots = [];

    if (!isPast && (!isWeekendDay || weekend)) {
      let allSlots = generateSlots(dayDate);

      // If it's today, filter out slots before now + interval
      if (dayDate.hasSame(today, 'day')) {
        const cutoff = today.plus({ minutes: interval });
        allSlots = allSlots.filter(timeStr => {
          const slot = DateTime.fromFormat(timeStr, 'HH:mm', { zone: 'Africa/Johannesburg' })
            .set({ year, month, day });
          return slot > cutoff;
        });
      }

      const busyTimes = eventsByDay[day] || [];
      slots = allSlots.filter(timeStr => {
        const slot = DateTime.fromFormat(timeStr, 'HH:mm', { zone: 'Africa/Johannesburg' })
          .set({ year, month, day });
        return isSlotFree(slot, busyTimes);
      });
    }

    const hasSlots = slots.length > 0;
    const active = hasSlots && !activated;
    if (active) activated = true;

    availableDays.push({
      specification: spec,
      slots,
      active,
      day
    });
  }

  return availableDays.length > 0 ? availableDays : [];
} 

const createEvent = async (data) => {
  const client = await authClient.getClient();
  const event = {
    summary: `Consultation with ${data.first_name} ${data.last_name}`,
    description: `Phone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\nConsultion Type: ${data.type === "both"? "Business and Personal": data.type}\nCompany: ${data.company}\nCompany Age: ${data.company_age} Years\n Business Revenue: ${data.business_revenue}\nAdditional_information: ${data.additional_info}`,
    start: { dateTime: `${data.date}T${data.time}:00+02:00` },
    end: { dateTime: `${data.date}T${data.time}:00+02:00` },
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 60 },
        { method: 'popup', minutes: 10 }
      ]
    }
  };
  await calendar.events.insert({
    auth: client,
    calendarId,
    resource: event,
  });
};

const saveToDatabase = (data) => {
  const db = new sqlite3.Database("./database.db", (err) => {
    if (err) {
      console.error(err.message)
    }
    console.log("Connected to the database.")
  });

  //create table bookings if not exist
  const create = `CREATE TABLE IF NOT EXISTS bookings(id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, phone TEXT, email TEXT, service TEXT, type TEXT, company TEXT, company_age TEXT, business_revenue TEXT, date_time DATETIME UNIQUE, additional_info TEXT)`

  db.run(create, (err) => {
    if (err) {
      console.error(err.message)
    }
  })
  
  const sql = `
    INSERT INTO bookings (
      first_name, last_name, phone, email,
      service, type, company, company_age,
      business_revenue, date_time, additional_info
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.first_name,
    data.last_name,
    data.phone,
    data.email,
    data.service,
    data.type,
    data.company,
    data.company_age,
    data.business_revenue,
    `${data.date} ${data.time}`,
    data.additional_info
  ];

  db.run(sql, values, function (err) {
    if (err) {
      console.error('Database error:', err.message);
    } else {
      console.log('Booking saved successfully.');
    }
  });
}

// API routes should come before static file serving
app.get("/api/available-slots", async (req, res) => {
  try {
    const { month, year } = req.query;

    // Validate inputs
    const numericMonth = parseInt(month);
    const numericYear = parseInt(year);

    if (
      isNaN(numericMonth) || numericMonth < 1 || numericMonth > 12 ||
      isNaN(numericYear) || numericYear < 1900
    ) {
      return res.status(400).json({ error: "Invalid month or year" });
    }

    // Call your slot logic
    const slots = await getAllAvailableTimeSlots(
      numericMonth,
      numericYear,
      weekendAppointments,
      startTime,
      endTime,
      intervalTime
    );

    res.json({ days: slots });
  } catch (err) {
    console.error("Error fetching available slots:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use(express.json())
app.post('/api/book', (req, res) => {
  // Process the booking data as needed
  createEvent(req.body).catch(console.error);
  saveToDatabase(req.body);

  res.json({ message: 'Booking successful' });
});


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on ${PORT}`);
});
