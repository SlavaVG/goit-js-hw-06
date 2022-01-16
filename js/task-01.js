const meNuh2 = document.querySelectorAll("h2");
console.log(`Number of categories:`, meNuh2.length);

const meNu = document.querySelector("ul");
for (let elem of meNu.children) {
    const meNu4ul = elem.querySelector("h2");
    console.log(`Category:`, meNu4ul.textContent);
    const meNu4li = elem.querySelectorAll("li");
    console.log(`Elements:`, meNu4li.length);
    }
