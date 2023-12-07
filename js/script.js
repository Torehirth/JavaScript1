// Module 3 lesson 3

// Question 1:

// Convert the below functions to one-line arrow functions.

// function greet(name) {
//   return `Hello ${name}!`;
// }

// function add(a, b) {
//   return a + b;
// }

// answer:

const greet = (name) => {
  `hello ${name}!`;
};

const add = (a, b) => {
  a + b;
};

// Question 2:

// Convert the below code to use the then/catch syntax instead.

// async function getCatFacts() {
//   try {
//     const response = await fetch("https://api.noroff.dev/api/v1/cat-fact");
//     const results = await response.json();
//     console.log(results.length);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getCatFacts();

// Answer:

fetch("https://api.noroff.dev/api/v1/cat-fact")
  .then(function (response) {
    console.log(response);

    return response.json();
  })
  .then(function (results) {
    console.log(results);
    console.log(results.length);
  })
  .catch(function (error) {
    console.log(error);
  });

// we can also enclose the code in a function and then call it
// this will have the same effect but means the code is reusable and can be called again from somewhere else in the code

function getCatFacts() {
  fetch("https://api.noroff.dev/api/v1/cat-facts")
    .then(function (response) {
      return response.json();
    })
    .then(function (results) {
      console.log(results.length);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getCatFacts();

// with arrow functions
function getCatFacts2() {
  fetch("https://api.noroff.dev/api/v1/cat-facts")
    .then((response) => response.json())
    .then((results) => {
      console.log(results.length);
    })
    .catch((error) => console.log(error));
}

getCatFacts2();
