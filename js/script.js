// Module 1 Lesson 4

const sports = ["golf", "football", "cricket"];

const games = [
  {
    name: "Starcraft 2",
    released: "2010",
  },
  {
    name: "Age of Empires II",
  },
  {
    name: "Cyberpunk 2077",
    released: 2020,
  },
];

// Question 1

function printSeason(season) {
  console.log(season);
}

printSeason("summer");

// Question 2

function printNumbers(firstNumber, secondNumber) {
  console.log(`
  first number: ${firstNumber} 
  second number: ${secondNumber}
  `);
}

printNumbers(2, 5);

// Question 3

function addNumbers(firstNumber, secondNumber, thirdNumber) {
  const result = firstNumber + secondNumber + thirdNumber;

  return result;
}

const total = addNumbers(2, 4, 4);

const resultContainer = document.querySelector(".total");

resultContainer.innerHTML = total;

// Question 4

// Question 5

// Question 6
