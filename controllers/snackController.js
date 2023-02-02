const express = require("express");
const snacks = express.Router();
const {
  getAllSnacks,
  getOneSnack,
  updateOneSnack,
  deleteSnack,
  createSnack,
} = require("../queries/snacks");
const checkSnack = require("../utils/snackCheck");

snacks.get("/", async (req, res) => {
  try {
    const snacks = await getAllSnacks();
    res.json(snacks);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "something went wrong!" });
  }
});

snacks.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const snack = await getOneSnack(id);
    res.json(snack);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "That Snack doesn't exist!!" });
  }
});

snacks.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const snack = checkSnack(req.body);
    const updatedsnack = await updateOneSnack(id, snack);
    res.json(updatedsnack);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Cannot update Snack" });
  }
});

snacks.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSnack = await deleteSnack(id);
    res.json(deletedSnack);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something went wrong!" });
  }
});

snacks.post("/", async (req, res) => {
  try {
    const snack = checkSnack(req.body);
    const createdSnack = await createSnack(snack);
    res.json(createdSnack);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: `Malformed post body: ${req.body}` });
  }
});

module.exports = snacks;
