// Module 3 lesson 4

// Question 1:

// Add headers to the below API call.

// You can choose whether to create a variable for the headers object seperately from the call and pass the variable in as the second parameter, or pass the headers object in directly.

const API_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

async function callUrbanDictionary() {
  const response = await fetch(API_URL);
  const results = await response.json();
  console.log(results);
}
