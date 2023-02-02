const db = require("../db/dbConfig.js");
const getAllSnacks = async () => await db.any("SELECT * FROM snacks");

const getOneSnack = async (id) => await db.one("SELECT * FROM snacks WHERE id=$1", id);

const updateOneSnack = async (id, snack) =>{
  const { name, fiber, protein, added_sugar, is_healthy, image } = snack;

  return await db.one('UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6 WHERE id=$7 RETURNING *', [name, fiber, protein, added_sugar, is_healthy, image, id])

  }
module.exports = { getAllSnacks, getOneSnack, updateOneSnack };
