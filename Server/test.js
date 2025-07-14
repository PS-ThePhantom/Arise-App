const { google } = require('googleapis');
const auth = require('google-auth-library');
const calendar = google.calendar('v3');
const { DateTime } = require('luxon');

const authClient = new auth.GoogleAuth({
  keyFile: 'arise-calendar-api.json',
  scopes: ['https://www.googleapis.com/auth/calendar'],
});

/*
const createEvent = async () => {
  const client = await authClient.getClient();
  const calendarId = 'phuluso.singo@gmail.com'; // or use your specific calendar ID
  const event = {
    summary: 'Consultation with Client',
    start: { dateTime: '2025-07-15T10:00:00+02:00' },
    end: { dateTime: '2025-07-15T11:00:00+02:00' },
  };
  await calendar.events.insert({
    auth: client,
    calendarId,
    resource: event,
  });
};

createEvent().catch(console.error);*/
/*
const listEvents = async () => {
  const client = await authClient.getClient();

  const res = await calendar.events.list({
    auth: client,
    calendarId: 'primary', // or your specific calendar ID
    timeMin: '2025-07-01T00:00:00+02:00',
    timeMax: '2025-07-31T23:59:59+02:00',
    singleEvents: true,
    orderBy: 'startTime',
  });

  const events = res.data.items;
  if (events.length === 0) {
    console.log('No events found for July.');
  } else {
    events.forEach(event => {
      const start = event.start.dateTime || event.start.date;
      console.log(`${start} - ${event.summary}`);
    });
  }
};

listEvents().catch(console.error);
*/

async function getAllAvailableTimeSlots(month, year, weekend, start, end, interval) {
  const client = await authClient.getClient();
  const calendarId = 'primary';
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
    const spec = isPast ? 'old' : dayDate.hasSame(today, 'day') ? 'today' : '';
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

(async () => {
  const result = await getAllAvailableTimeSlots(7, 2025, false, "09:00:00", "17:00:00", 30);
  console.log(result.length);
})();