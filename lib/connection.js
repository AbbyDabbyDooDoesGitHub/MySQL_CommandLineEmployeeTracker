//! ESTABLISH DATABASE CONNECTION

const mysql = require("mysql2");

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "password",
      database: "tracker_db"
    },
    console.log("Connected to tracker_db")
);

// EXPORT DATABASE CONNECTION ------------------------------------------------
module.exports = { db };