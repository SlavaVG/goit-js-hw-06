const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul#ingredients');
let itemArr = ingredients.map(currentValue => {
  const newElRef = document.createElement('li');
  newElRef.textContent = currentValue;
  return newElRef;
});
  listEl.append(...itemArr);