const db = require("../db/dbConfig.js");

const getAllSnacks = async () => await db.any("SELECT * FROM snacks");

const getOneSnack = async (id) =>
  await db.one("SELECT * FROM snacks WHERE id=$1", id);

const deleteSnack = async (id) =>
  await db.one("DELETE FROM snacks WHERE id = $1 RETURNING *", id);

module.exports = { getAllSnacks, getOneSnack, deleteSnack };
