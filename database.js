const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "parkease_user",
    password: "ParkEase@123",
    database: "parkease"
});

db.connect((err) => {

    if (err) {
        console.error("MySQL connection failed:", err.message);
        return;
    }

    console.log("MySQL connected successfully!");

});

module.exports = db;  