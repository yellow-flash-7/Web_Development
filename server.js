
const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname)));

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

app.get("/api/students", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM students ORDER BY id"
        );

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error" });
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
