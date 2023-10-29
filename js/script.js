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

function createGreeting(name) {
  const message = `Hello, my name is ${name}`;

  return message;
}

const greeting = createGreeting("Tore");

const greetingContainer = document.querySelector("#name");
greetingContainer.innerHTML = greeting;

// Question 5

function printListItems(item) {
  for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
  }
}

printListItems(sports);

// Question 6

// const gameContainer = document.createElement("div");
// gameContainer.classList.add("game-container");
// gamesContainer.appendChild(gameContainer);

function createGames(game) {
  let html = "";

  for (let i = 0; i < game.length; i++) {
    let releaseYear = "unknown";

    if (games[i].released) {
      releaseYear = game[i].released;
    }

    html += `
    <div class="game-container">
      <h3>name: ${game[i].name}</h3>
      <p>released: ${releaseYear}</p> 
    </div>
    `;
  }

  return html;
}

const gamesContainer = document.querySelector(".games-container");

const displayHTML = createGames(games);

gamesContainer.innerHTML = displayHTML;
