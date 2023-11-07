// // Module 2 Lesson 3

// Question:

// when the button is pressed and held down start a counter that increments by 1 every second
// When the button is released stop the counter and create an amount of text boxes equal to the counter value
// when the counter is pressed and held down again set the counter to 0, clear the text inputs and repeat the previous step

const countButton = document.querySelector(".toolbar button");
const countField = document.querySelector(".count");
const inputContainer = document.querySelector(".inputs");

// const intervalId = setInterval(startCounter, intervalTime);

countButton.addEventListener("click", function () {
  const intervalTime = 1000;
  let count = 0;

  function startCounter() {
    count++;

    console.log(count);
  }

  const intervalId = setInterval(startCounter, intervalTime);
});
