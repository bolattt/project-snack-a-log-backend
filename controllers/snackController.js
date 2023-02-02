const express = require("express");
const snacks = express.Router();

const { getAllSnacks, getOneSnack, updateOneSnack, deleteSnack, createSnack } = require("../queries/snacks");


snacks.use(express.json());

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



snacks.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const snack = req.body
    const updatethesnack =  await updateOneSnack(id, snack);
    res.json(updatethesnack);
  }catch (error) {
    res.status(400).json({ error: "Cannot update Snack" });
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

snacks.post("/", async (req, res) => {
  try {
    const createdSnack = await createSnack(req.body);
    const newSnack = createdSnack;

    if (
      newSnack.fiber >= 5 &&
      newSnack.protein >= 5 &&
      newSnack.added_sugar <= 5
    ) {
      newSnack.is_healthy = true;
    } else {
      newSnack.is_healthy = false;
    }

    res.json(newSnack);
  } catch (error) {
    res.status(400).json({ error: `Malformed post body: ${req.body}` });
  }
});


module.exports = snacks;
