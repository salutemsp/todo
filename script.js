"use strict";

const inputText = document.querySelector(".text");
const buttonAdd = document.querySelector(".add");
const list = document.querySelector(".list");

buttonAdd.addEventListener("click", function () {
  const todo = inputText.value;

  //create an input element
  const check = document.createElement("input");
  //set the type of created input into checkbox
  check.setAttribute("type", "checkbox");
  //create a li element
  const li = document.createElement("li");
  //create a text node from the inputed text
  const text = document.createTextNode(todo);

  //append the checkbox into the li element[]
  li.appendChild(check);
  //append the textnode into the li
  li.appendChild(text);
  //append the li into the list (the ul element containing the todos)
  list.appendChild(li);
});
