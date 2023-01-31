// DEPENDENCIES
const express = require("express");
const app = express();

// CONFIGURATION

// MIDDLEWARE
const snackController = require("./controllers/snackController");
app.use("/snacks", snackController);

// ROUTES
app.get("/", (req, res) => {
  res.send("My cat is 5 lbs too heavy");
});

// EXPORT
module.exports = app;
