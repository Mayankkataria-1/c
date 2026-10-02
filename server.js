const express = require("express");
const cors = require("cors");
const db = require("./db/database");

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors());


// Test API
app.get("/", (req, res) => {

    res.json({
        message: "ParkEase Backend is running!"
    });

});


// Get all parking slots
app.get("/api/parking", (req, res) => {

    const sql = "SELECT * FROM parking_slots";

    db.query(sql, (err, results) => {

        if (err) {

            console.error(err);

            return res.status(500).json({
                error: "Failed to get parking slots"
            });

        }

        res.json(results);

    });

});


app.listen(PORT, () => {

    console.log(
        `ParkEase backend running at http://localhost:${PORT}`
    );

});