// Module 1 Lesson 4

const sports = ["golf", "football", "cricket"]; // array

const games = [
  // array of objects
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
  const result = firstNumber + secondNumber + thirdNumber; // adding a variable who adds all the parameters in the function.

  return result; // returning the sum of the parameters.
}

const total = addNumbers(2, 4, 4);
// Calling the function with firstNumber = 2, secondNumber = 4 and thirdNumber = 4, and asigning it to a variabel.

const resultContainer = document.querySelector(".total"); // selecting the class of the element that HTML is displayed in and asigning it to a variabel.

resultContainer.innerHTML = total; // publishes the function variabel to the hmtl variabel.

// Question 4

function createGreeting(name) {
  // chose name as the parameter.
  const message = `Hello, my name is ${name}`; // greeting message to display.

  return message;
}

const greeting = createGreeting("Tore"); // calling the function and assigning it to a variabel.

const greetingContainer = document.querySelector("#name"); // chosing html element which displays the message.

greetingContainer.innerHTML = greeting; // publishes the greeting/function result.

// Question 5

function printListItems(item) {
  for (let i = 0; i < item.length; i++) {
    // Making a for loop for the array.
    console.log(item[i]);
    // logging each property of the array.
  }
}

printListItems(sports); // calling the function with the sports array, this will execute the logging of each property of this array.

// Question 6

function createGames(game) {
  let html = ""; // creating an empty variabel, this will be used for the HTML later.

  for (let i = 0; i < game.length; i++) {
    let releaseYear = "unknown"; // displays unknown if the released property is missing.

    if (games[i].released) {
      releaseYear = game[i].released;
      // if released property is truthy the variabel releaseYear gets the value of the released property.
    }

    html += ` 
    <div class="game-container">
      <h3>name: ${game[i].name}</h3>
      <p>released: ${releaseYear}</p> 
    </div>
    `;
    // assigning a new value to the variabel html. this will create a div (with class game-container) that contains h3-element and a p-element.
  }

  return html; // returning and ends the loop.
}

const gamesContainer = document.querySelector(".games-container");
// where the html will be published.

const displayHTML = createGames(games);
// Calling the function and assigning it to a variabel.

gamesContainer.innerHTML = displayHTML;
// publishing the result to selected html.
