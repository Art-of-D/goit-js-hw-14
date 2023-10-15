"use strict";

let nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");
nameInput.addEventListener('input', nameHolder);

function nameHolder(){
    let name =  nameInput.value.trim();
    if (name.length === 0){
        nameOutput.textContent = "Anonymous";    
    } else {
        nameOutput.textContent = name;
    }
}

