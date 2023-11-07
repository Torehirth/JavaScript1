// // Module 2 Lesson 3

// Question 1:

// const btn = document.querySelector(".btn");

// btn.onclick = function () {
//     console.log("I'm a button");
// };

// const btn = document.querySelector("button.btn");

// btn.addEventListener("click", function () {
//   const message = `I'm a button`;
//   console.log(message);
// });

// Question 2:

// retrieve length of letters in form.
// when clicking button, update count value in html.
// remove all trailing and leading spaces on the input value - trim().

const submitButton = document.querySelector("form button");
const inputField = document.querySelector("input");
const countContainer = document.querySelector("b.count");

function characterCount() {
  const length = inputField.value.trim().length;
  console.log(length);

  // If character count should be updated automaticly when keyup event is triggered.
  // countContainer.innerHTML = length;
}

inputField.addEventListener("keyup", characterCount);
submitButton.addEventListener("click", function () {
  const length = inputField.value.trim().length;
  countContainer.innerHTML = length;
});
