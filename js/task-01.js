const menuItemsByTagName = document.querySelectorAll("h2");
console.log(`Number of categories:`, menuItemsByTagName.length);

const meNu = document.querySelector("ul");
for (let elem of meNu.children) {
    const meNu4ul = elem.querySelector("h2");
    console.log(`Category:`, meNu4ul.textContent);
    const meNu5li = elem.querySelectorAll("li");
    console.log(`Elements:`, meNu5li.length);
    }
