"use strict";

let counterValue = 0;
let viewedValue = document.querySelector("#value");

let incrButton = document.querySelector('[data-action="increment"]');
let decrButton = document.querySelector('[data-action="decrement"]');

incrButton.addEventListener('click', incrCounter);
decrButton.addEventListener('click', decrCounter);

function incrCounter() {
    counterValue += 1;
    viewedValue.textContent = counterValue;
}

function decrCounter() {
    counterValue -= 1;
    viewedValue.textContent = counterValue;
}
