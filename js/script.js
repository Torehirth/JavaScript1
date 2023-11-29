// Module 3 lesson 1

// Question 1:
//Write code that checks if the below variable is truthy, log the string "truthy" if it is, and "falsy" if not.

const menuIsOpen = false;

if (menuIsOpen) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// Question 2:
// Based on the below URL, what are the different querystring parameters and their respective values?

// https://api.rawg.io/api/games?platforms=4&genres=action&publishers=354

// Querystring:----- Values:
// platforms--------4
// genres-----------action
// publishers-------354

// Question 3:
// Create an async function called getCatFacts.
// Inside the function make an API call to the below URL using async/await, and save it to a    variable called response.
// Create a variable called results where you await the json of your response variable.
// Console.log the length of results.

const getCatFacts = async function () {
  const apiUrl = "https://api.noroff.dev/api/v1/cat-facts";

  const articles = document.querySelector("article");
  const response = await fetch(apiUrl);
  const results = await response.json();

  console.log(results.length);

  results.forEach((element) => {
    const factContainer = document.createElement("div");
    factContainer.setAttribute("id", "fact");
    factContainer.classList.add("fact-container");
    factContainer.innerText = element.text;
    articles.append(factContainer);
  });
};

getCatFacts();
