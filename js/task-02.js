const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let i = 0; i < ingredients.length; i += 1) {
  const list = document.querySelector("#ingredients");
  const lastItem = document.createElement("li");
  lastItem.textContent = ingredients[i];
  list.append(lastItem);
}