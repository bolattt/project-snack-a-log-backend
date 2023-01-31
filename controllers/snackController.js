const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getOneSnack } = require("../queries/snacks");

// const db = require("../db/dbConfig");

// snacks.get("/", async (req, res) => {
//   const snacksList = await db.any("SELECT * FROM snacks");
//   res.send(snacksList);
// });

// snacks.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   const snack = await db.oneOrNone("SELECT * FROM snacks WHERE id = $1", id);
//   res.json(snack);
// });

snacks.get("/", async (req, res) => {
  try {
    const snacks = await getAllSnacks();
    res.json(snacks);
  } catch (error) {
    res.status(400).json({ error: "something went wrong!" });
  }
});

snacks.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const snack = await getOneSnack(id);
    res.json(snack);
  } catch (error) {
    res.status(404).json({ error: "That Snack doesn't exist!!" });
  }
});

module.exports = snacks;
