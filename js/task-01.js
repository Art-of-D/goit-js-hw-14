"use strict";

const categoryItems = document.querySelectorAll("#categories .item");

let message = `Number of categories: ${categoryItems.length}\n\n`;

categoryItems.forEach(categoryItem => {
  const categoryH2 = categoryItem.querySelector("h2").textContent;
  const categoryLi = categoryItem.querySelectorAll("ul li");
  message += `Category: ${categoryH2}\n` + `Elements: ${categoryLi.length}\n\n`;
});

console.log(message);
alert(message);