const db = require("../db/dbConfig.js");

const getAllSnacks = async () => await db.any("SELECT * FROM snacks");

const getOneSnack = async (id) =>
  await db.one("SELECT * FROM snacks WHERE id=$1", id);

module.exports = { getAllSnacks, getOneSnack };
