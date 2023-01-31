const express = require("express");
const snacks = express.Router();

const db = require("../db/dbConfig");

snacks.get("/", async (req, res) => {
  const snacksList = await db.any("SELECT * FROM snacks");
  res.send(snacksList);
});

snacks.get("/:id", async (req, res) => {
  const id = req.params.id;
  const snack = await db.oneOrNone(`SELECT * FROM snacks WHERE id = $1`, id);
  res.json(snack);
});

module.exports = snacks;
