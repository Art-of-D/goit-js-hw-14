"use strict";

const categoryElements = document.querySelectorAll("#categories .item h2");

const categories = {};

categoryElements.forEach(categoryElement => {
    const categoryName = categoryElement.textContent;
    const itemList = categoryElement.nextElementSibling.querySelectorAll('li');
    const items = Array.from(itemList).map(item => item.textContent);
    categories[categoryName] = items;
});
const keyLength = Object.keys(categories).length;
let message = `Number of categories: ${keyLength}\n`;
for (const key in categories) {
        if (Object.hasOwnProperty.call(categories, key)) {
            message += `Category: ${key}\n` + `Elements: ${categories[key].length}\n`;
        }
    }
console.log(message);
alert(message);