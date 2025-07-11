const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log("Connected to the database.")
});

//create bookings table
let sql = `CREATE TABLE IF NOT EXISTS bookings(id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, phone TEXT, email TEXT, service TEXT, type TEXT, company TEXT, company_age TEXT, business_revenue TEXT, date_time DATETIME UNIQUE, additional_info TEXT)`

db.run(sql, (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log("Table created successfully.")
})

//create holidays table for all south african holidays
sql = `CREATE TABLE IF NOT EXISTS holidays(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, day, month)`

db.run(sql, (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log("Table created successfully.")
})

//create table for all the available time slots
sql = `CREATE TABLE IF NOT EXISTS time_slots(id INTEGER PRIMARY KEY AUTOINCREMENT, time TEXT UNIQUE)`

db.run(sql, (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log("Table created successfully.")
})

//insert all south african holidays into holidays table
sql = `INSERT into holidays(name, day, month) VALUES('New Year', 1, 1), ('Human Rights Day', 21, 3), ('Good Friday', 7, 4), ('Family Day', 9,`