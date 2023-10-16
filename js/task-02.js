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
const totalAppend = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const listLi = document.createElement("li");
  listLi.textContent = ingredient;
  listLi.classList.add("item");
  totalAppend.appendChild(listLi);
});

ingredientsList.appendChild(totalAppend);