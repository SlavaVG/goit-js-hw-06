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

const list = document.querySelector("#ingredients");
list.append('================================');

var result = ingredients.reduce(function (sum, current, index, arr) {
    const buoy = document.querySelector("#ingredients"); // присвоили постоянной значение узла (нашли елемент)
    const lastBuoy = document.createElement("li"); // присвоили постоянной значение узла  в дереве разметки 
    // lastBuoy.textContent = ingredients[index]; // (так работает) присвоили постоянной текстовое содержимое елемента согласное его номера в массиве
    lastBuoy.textContent = current; // (и так работает!) присвоили постоянной текстовое содержимое елемента
    buoy.append(lastBuoy); // добавили постоянную в конец после найденного выше узла. (создали дочерний елемент/узел в дереве разметки)
  }, 0);