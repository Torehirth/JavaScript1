// JavaScript 1 - Module 4

// Lesson Task 2 Question

// Make a call to the following endpoint:

// ```
// https://api.noroff.dev/api/v1/old-games/2
// ```

// Display the name, description and image of the game returned.

import message from "./components/message.js";

const URL = "https://api.noroff.dev/api/v1/old-games/2";

const mainContainer = document.querySelector(".details");

// fetching the game through a function using an API call.
async function fetchGames() {
  try {
    const response = await fetch(URL);
    const results = await response.json();

    //logging the result of the API call.
    console.log(results);

    //get rid of the loader when the call is done.
    mainContainer.innerHTML = "";

    //calling the function that generates the HTML with results as the argument.
    createHTML(results);
  } catch (error) {
    console.log(error);
    mainContainer.innerHTML = message("error", error);
  }
}

fetchGames();

// creating a function for the HTML with the results as the argument
function createHTML(results) {
  mainContainer.innerHTML += `
                             <h1 class="name">${results.name}</h1>
                             <div class="status">${results.description}</div>
                             <div class="image" style="background-image: url('${results.image}')" alt="gameplay of lemmmings that looks like an old 2d game"</div>
                             </div>
                             `;
}
