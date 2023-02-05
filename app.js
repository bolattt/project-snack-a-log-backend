// DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const snackController = require("./controllers/snackController");
app.use("/snacks", snackController);

// ROUTES
app.get("/", (req, res) => {
  res.send("My cat is 5 lbs too heavy");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found!" });
});

// EXPORT
module.exports = app;
