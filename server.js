const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let reports = [];

// GET
app.get("/api/reports", (req, res) => {
  res.json(reports);
});

// POST
app.post("/api/reports", (req, res) => {
  const { title, description, type, risk, score } = req.body;

  const newReport = {
    title,
    description,
    type,
    risk: risk || "LOW",
    score: score || 0,
  };

  reports.push(newReport);

  res.json(newReport);
});

// START SERVER
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});