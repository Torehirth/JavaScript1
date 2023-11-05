// // Module 2 Lesson 2

// Question:
// Add a click event to the button that disables the button and starts a counter.
// Count to 7 and update span.count with the value of the count.
// Once 7 is reached stop the count and enable the button.

// --------------------------------------------------------------

// Storing the HTML elements in variabels.
const button = document.querySelector("button");
const counter = document.querySelector(".count");

// Main function that executes the other functions by the click event.
button.addEventListener("click", function () {
  let count = 0;
  const countLimit = 7;
  const intervalTime = 1000; // = 1s

  // ---------------------- setInterval -----------------------------
  function timerCount() {
    // adding +1 to count variabel every 1000ms (1s).
    count++;

    // Logging the count.
    console.log(count);

    if (count === countLimit) {
      // Stops the count variabel after reaching the countLimit (7).
      clearInterval(intervalId);

      // Enables the button again after the function has ended.
      button.disabled = false;
    }
  }

  // storing the function inside a variabel so that it can be used to stop it above.
  // Using setTimout for calling the timerCount function and executing it every intervalTime (1s).
  const intervalId = setInterval(timerCount, intervalTime);

  // --------------------- setTimeout -------------------------------

  // We need the countLimit to be in ms (multiplying by 1000) = 7s.
  const waitingTime = countLimit * 1000;

  function updateTime() {
    // When waitingTime is reached (7s) it displays the count in the HTML element.
    if (waitingTime) {
      counter.innerText = count;
    }
  }
  // Using setTimout for calling the updateTime function and executing it after waitingTime is reached.
  setTimeout(updateTime, waitingTime);

  // Disables the button after it's clicked/function is activated.
  button.disabled = true;
});

// Conclusion:
// Didn't understand the question exactly, so I made the count display after it had reached 7, making the task a bit harder than it should've been.

// -----------------------------------------------------

// Answer by teacher on the task.

// let counter = 0;
// const button = document.querySelector("button");
// const countContainer = document.querySelector(".count");

// button.onclick = function () {
//     event.target.disabled = true;

//     // reset counter
//     counter = 0;

//     const intervalId = setInterval(function () {
//         counter++; // add 1 to counter
//         countContainer.innerHTML = counter;

//         if (counter === 7) {
//             clearInterval(intervalId);
//             button.disabled = false;
//         }
//     }, 1000);
// };
