// DEPENDENCIES
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());

const snackController = require("./controllers/snackController");
app.use("/snacks", snackController);

// ROUTES
app.get("/", (req, res) => {
  res.send("My cat is 5 lbs too heavy");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

// EXPORT
module.exports = app;
