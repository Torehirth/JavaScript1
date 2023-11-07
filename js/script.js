// // Module 2 Lesson 3

// Question:

// when the button is pressed and held down start a counter that increments by 1 every second
// When the button is released stop the counter and create an amount of text boxes equal to the counter value
// when the counter is pressed and held down again set the counter to 0, clear the text inputs and repeat the previous step

const countButton = document.querySelector(".toolbar button");
const countContainer = document.querySelector(".counter");
const inputContainer = document.querySelector(".inputs");

let count = 0;
let intervalId;
const intervalTime = 1000;

countButton.addEventListener("mousedown", startCounter);
countButton.addEventListener("mouseup", stopCounter);

function startCounter() {
  clearInterval(intervalId);

  inputContainer.innerHTML = "";

  if (count > 0) {
    count = 0;
    countContainer.innerHTML = "0";
  }

  function startCounter() {
    count++;

    countContainer.innerHTML = count;
  }
  this.textContent = "Release to stop counting";
  intervalId = setInterval(startCounter, intervalTime);
}

function stopCounter() {
  this.textContent = "press and hold to start counting";

  clearInterval(intervalId);

  for (let i = 1; i <= count; i++) {
    inputContainer.innerHTML += `
    <input name="input${i}" id="input${i}" placeholder="Write here">
    <p>Textbox number ${i}</p>
    </input>`;
  }
}

// ------------------------Or----------------------------------

// countButton.addEventListener("mousedown", handleMouseDown);
// countButton.addEventListener("mouseup", handleMouseUp);

// let intervalId;
// let count;

// function handleMouseDown() {
//   count = 0;
//   this.textContent = "Release to stop counting";
//   countField.innerHTML = count;
//   inputField.innerHTML = "";

//   intervalId = setInterval(function () {
//     count++;
//     countField.innerHTML = count;
//   }, 1000);
// }

// function handleMouseUp() {
//   clearInterval(intervalId);
//   this.textContent = "Press and hold to count";

//   for (let i = 1; i <= count; i++) {
//     inputField.innerHTML += `<input name="input${i}" id="input${i}" placeholder="Input ${i}" />`;
//   }
// }

// ------------------------Or----------------------------------

// // Step 1: Get the necessary elements
// const countButton = document.querySelector(".toolbar button");
// const countField = document.querySelector(".counter");
// const inputContainer = document.querySelector(".inputs");

// // Step 2: Initialize variables
// let count = 0;
// let intervalId;
// const intervalTime = 1000;

// // Step 3: Add an event listener for the mouse down
// countButton.addEventListener("mousedown", startCounting);

// function startCounting() {
//   clearInterval(intervalId);

//   resetCount();

//   countButton.textContent = "Release to stop counting";

//   function incrementCounter() {
//     count++;
//     countField.innerHTML = count;
//   }

//   intervalId = setInterval(incrementCounter, intervalTime);
// }

// // Step 4: Reset the count and inputContainer
// function resetCount() {
//   count = 0;
//   countField.innerHTML = "0";
//   inputContainer.innerHTML = "";
// }

// // Step 5: Add an event listener for mouse up
// countButton.addEventListener("mouseup", stopCounting);

// function stopCounting() {
//   clearInterval(intervalId);

//   countButton.textContent = "Press and hold to start counting";

//   // Step 6: Create an input element and a paragraph for each countnumber, and add it to the inputContainer
//   for (let i = 1; i <= count; i++) {
//     const input = document.createElement("input");
//     input.setAttribute("name", `input${i}`);
//     input.setAttribute("id", `input${i}`);
//     input.setAttribute("placeholder", "Write here");

//     const paragraph = document.createElement("p");
//     paragraph.textContent = `Textbox number ${i}`;

//     // Append the input and paragraph elements to the inputContainer
//     inputContainer.appendChild(input);
//     inputContainer.appendChild(paragraph);
//   }
// }
