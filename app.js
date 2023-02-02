// DEPENDENCIES
const express = require("express");
const app = express();
app.use(express.json())

// CONFIGURATION

// MIDDLEWARE
const snackController = require("./controllers/snackController");
app.use("/snacks", snackController);


// ROUTES
app.get("/", (req, res) => {
  res.send("My cat is 5 lbs too heavy");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found!" });
});




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// EXPORT
module.exports = app;
