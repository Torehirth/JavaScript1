// Module 2 Lesson 1

// Question 1

function receivingFunction(someArgument) {
  // console.log("this is a function");

  if (typeof someArgument === "function") {
    someArgument();
  } else {
    console.log("Argument is not a function");
  }
}

function callBackFunction() {
  console.log("I am a callback function");
}

receivingFunction(callBackFunction);

// Question 2

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

// for (let i = 0; i < prizes.length; i++) {
//   console.log(`Prize ${i + 1}: ${prizes[i]}`);
// }

prizes.forEach(function (item, index) {
  console.log(`Prize ${index + 1}: ${item}`);
});

// Question 3

function timeOut() {
  console.log("I waited 5 seconds before executing");
}

const waitingTime = 5000; // 5 seconds

setTimeout(timeOut, waitingTime); // using the timeOut function as a parameter as well as the waitingTime variabel.

// Question 4

let number = 1;
const intervalTime = 1500;

function numberCount() {
  console.log(number++); // log number (starting from 1) and increase value by 1 each time.

  if (number > 4) {
    clearInterval(interval);
    // Stop interval when number is bigger than 4 (number 5 doesn't show)
  }
}

const interval = setInterval(numberCount, intervalTime);

// or

// const interval = 1500;
// let count = 0;
// const limit = 4;

// function logNumber() {
//   // increase count's value by 1
//   count++;

//   // log count's current value
//   console.log(count);

//   // check whether to clear the setInterval
//   if (count === limit) {
//     clearInterval(intervalId);
//   }
// }

// const intervalId = setInterval(logNumber, interval);
