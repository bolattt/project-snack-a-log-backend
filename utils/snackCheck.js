function formatName(name) {
  const formatted = name
    .trim()
    .replace(/\s{2,}/g, " ")
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return formatted;
}

const dummyImage =
  "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";

function checkSnack(snack) {
  const newSnack = {
    name: formatName(snack.name),
    fiber: snack.fiber,
    protein: snack.protein,
    added_sugar: snack.added_sugar || 0,
    is_healthy:
      snack.fiber > 5 && snack.protein > 5 && (snack.added_sugar || 0) < 5,
    image: snack.image || dummyImage,
  };
  return newSnack;
}

module.exports = checkSnack;
