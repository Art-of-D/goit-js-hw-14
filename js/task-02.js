"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
for (const product of ingredients) {
  let newElement = document.createElement("li");
  newElement.textContent = product;
  ingredientsList.append(newElement);
}