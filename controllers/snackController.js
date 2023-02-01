const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getOneSnack, deleteSnack } = require("../queries/snacks");

function formatName(name) {
  return name.split(" ").map((word) => word[0].toUpperCase() + word.slice(1));
}

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

snacks.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSnack = await deleteSnack(id);
    res.json(deletedSnack);
  } catch (error) {
    res.status(400).json({ error: "Something went wrong!" });
  }
});

module.exports = snacks;
