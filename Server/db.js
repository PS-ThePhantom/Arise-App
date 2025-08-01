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

