// Module 3 lesson 2

// Question 1:
// Give the below function's name parameter a default value of "John"

function greet(name = "john") {
  return `Hello ${name}!`;
}

console.log(greet());

// Question 2:
//Create a reusable function that accepts two parameters, then returns a dynamic HTML <div> element.
// The <div> it creates should insert one of the parameters as a class, and the other as the inner value. Similar to the below HTML:

/* <div class="class">value</div> */

// --------Answer below------------

// // resusable function that creates div element with classname and innervalue.
// function divCreator(className, innerValue) {
//   return `<div class="${className}">${innerValue}</div>`;
// }

// Resusable function that changes the classname and innerHTML, with default values in case undefined.
// function createMessage(type = "success", message = "no message") {
//   const html = `<div class="message ${type}">${message}</div>`;

//   return html;
// }
// const messageContainer = document.querySelector(".message-container");

// const message = createMessage("error", "faulty value");

// messageContainer.innerHTML = message;

// Or another way of creating this function below with arrow function syntax:

const createMessage = (type = "success", innerText = "no message") => {
  const className = document.querySelector(".message");

  className.classList.add(type);

  className.innerText = innerText;
};

// default values will execute if parameters is empty.
createMessage("success", "correct value");

// Question 3:
// Convert the below API call to use a try-catch-finally statement.

async function getFact() {
  const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
  const results = await response.json();
  console.log(results[8].text);
}
