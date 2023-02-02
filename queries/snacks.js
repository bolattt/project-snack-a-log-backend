const db = require("../db/dbConfig.js");

const getAllSnacks = async () => await db.any("SELECT * FROM snacks");

const getOneSnack = async (id) =>
  await db.one("SELECT * FROM snacks WHERE id=$1", id);

const deleteSnack = async (id) =>
  await db.one("DELETE FROM snacks WHERE id = $1 RETURNING *", id);

const createSnack = async (snack) =>
  await db.one(
    "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
    [
      snack.name,
      snack.fiber,
      snack.protein,
      snack.added_sugar,
      snack.is_healthy,
      snack.image,
    ]
  );

module.exports = { getAllSnacks, getOneSnack, deleteSnack, createSnack };
