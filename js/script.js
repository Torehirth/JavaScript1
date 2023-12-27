// Module 4 lesson 1

// Question 1:

// Make a call to the following endpoint:

// https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json

// Display the team name and city of the first 15 results, but exclude any team whose name begins with c.

// There will be a maximum of 15 results displayed if no teams' names begin with "C", and less than 15 displayed if there are teams whose names begin with "C".

import message from "./components/message.js";

const resultsContainer = document.querySelector(".container");

const URL = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

async function makeApiCall() {
  try {
    const response = await fetch(URL);
    const results = await response.json();

    console.log(results);

    results.forEach((element) => {
      resultsContainer.innerHTML += `
       <div class="card">
       <h2>${element.teamName}</h2>
       </div>
       `;
    });
  } catch (error) {
    console.log(error);
    resultsContainer.innerText = message("something went wrong", error);
  }
}

makeApiCall();
