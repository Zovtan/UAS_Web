const mysql = require("mysql2");

const db = mysql.createPool({
  user: "root",
  password: "",
  host: "localhost",
  database: "antre_db",
});

module.exports = db.promise();
