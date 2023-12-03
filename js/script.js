// Module 3 lesson 3

// Question 1:

// Convert the below functions to one-line arrow functions.

function greet(name) {
  return `Hello ${name}!`;
}

function add(a, b) {
  return a + b;
}

// Question 2:

// Convert the below code to use the then/catch syntax instead.

async function getCatFacts() {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
    const results = await response.json();
    console.log(results.length);
  } catch (error) {
    console.log(error);
  }
}
