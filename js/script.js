// Module 3 lesson 4

// Question 1:

// Add headers to the below API call.

// You can choose whether to create a variable for the headers object seperately from the call and pass the variable in as the second parameter, or pass the headers object in directly.

const API_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/";

const options = {
  method: "get",
  params: {
    terms: "wat",
  },
  headers: {
    "x-rapid-host": "mashape-community-urban-dictionary.p.rapidapi.com",
    "x-rapid-key": "6815f86374mshb4e1d4e6c412297p1a83c3jsn238811f180f3",
  },
};

async function callUrbanDictionary(API_URL, options) {
  const response = await fetch(API_URL, options);
  const results = await response.json();
  console.log(results);
}
