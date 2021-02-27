"use strict";

const inputText = document.querySelector(".text");
const buttonAdd = document.querySelector(".add");
const list = document.querySelector(".list");
const navAll = document.querySelector(".nav_all");
const navCompleted = document.querySelector(".nav_completed");
const navActive = document.querySelector(".nav_active");

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
    dos.classList.add("hidden");
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

let activeNav = "active";
const filterTodo = function (state) {
  let i = 0;
  let doActive = document.getElementsByClassName("active");
  let doCompleted = document.getElementsByClassName("completed");
  if (state === "active") {
    for (const val of doActive) {
      val.classList.remove("hidden");
    }
    for (const val of doCompleted) {
      val.classList.add("hidden");
    }
  } else if (state === "completed") {
    for (const val of doActive) {
      val.classList.add("hidden");
    }
    for (const val of doCompleted) {
      val.classList.remove("hidden");
    }
  } else {
    for (const val of doCompleted) {
      val.classList.remove("hidden");
    }
    for (const val of doActive) {
      val.classList.remove("hidden");
    }
  }
};

navActive.addEventListener("click", function (e) {
  activeNav = "active";
  filterTodo(activeNav);
});
navCompleted.addEventListener("click", function (e) {
  activeNav = "completed";

  filterTodo(activeNav);
});
navAll.addEventListener("click", function (e) {
  activeNav = "all";

  filterTodo(activeNav);
});
