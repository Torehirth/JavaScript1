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

// Question 4
