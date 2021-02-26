"use strict";

const inputText = document.querySelector(".text");
const buttonAdd = document.querySelector(".add");
const list = document.querySelector(".list");

const todoList = {
  active: [],
  completed: [],
};

const addTodo = function () {
  //get the inputted text of the user
  const todo = inputText.value;

  //creates a function to toggles the claslist of the dos
  const toggle = function () {
    dos.classList.toggle("strikestrough");
    dos.classList.toggle("active");
    dos.classList.toggle("completed");
  };

  //html to be created via insertAdjacent
  const html = `<li class="dos active"><input class="checkbox" type="checkbox" />${todo}</li>`;

  //insert the html
  list.insertAdjacentHTML("afterbegin", html);

  //get the checkbox and li element from the created html
  const checkbox = document.querySelector(".checkbox");
  const dos = document.querySelector(".dos");

  //check if the checkbox is checked then run the toggle function
  const ifChecked = function () {
    if (checkbox.checked == true) {
      toggle();
    } else {
      toggle();
    }
  };

  //click event for checkbox
  checkbox.addEventListener("click", ifChecked);
};

buttonAdd.addEventListener("click", addTodo);
