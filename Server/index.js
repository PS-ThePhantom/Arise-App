const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

const sqlite3 = require("sqlite3").verbose();

const weekendAppointments = false;

// API routes should come before static file serving
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/weekendOpen", (req, res) => {
  res.json({ message: weekendAppointments });
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
