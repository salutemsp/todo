"use strict";

const inputText = document.querySelector(".text");
const buttonAdd = document.querySelector(".add");
const list = document.querySelector(".list");

const todoList = {
  active: [],
  completed: [],
};

const addTodo = function () {
  const todo = inputText.value;
  //create an input element
  const check = document.createElement("input");
  //set the type of created input into checkbox
  check.setAttribute("type", "checkbox");
  check.setAttribute("class", "checkbox");
  //create a li element
  const li = document.createElement("li");
  li.setAttribute("class", "active");
  //create a text node from the inputed text
  const text = document.createTextNode(todo);

  //append the checkbox into the li element[]
  li.appendChild(check);
  //append the textnode into the li
  li.appendChild(text);

  //append the li into the list (the ul element containing the todos)

  todoList.active.push(todoList.active.length + 1);
  list.appendChild(li);

  const checkcb = function () {
    if (check.checked == true) {
      li.classList.toggle("strikestrough");
      li.classList.toggle("active");
      li.classList.toggle("complete");
    } else {
      li.classList.toggle("strikestrough");
      li.classList.toggle("active");
      li.classList.toggle("complete");
    }
  };

  console.log(list);
  check.addEventListener("click", checkcb);
};

buttonAdd.addEventListener("click", addTodo);
