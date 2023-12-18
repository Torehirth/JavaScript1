// Module 3 lesson 4

// Question 1:

// Add headers to the below API call.

// You can choose whether to create a variable for the headers object seperately from the call and pass the variable in as the second parameter, or pass the headers object in directly.

const options = {
  method: "get",
  headers: {
    "x-rapidAPI-key": "882b6ae104msh1a7305883509496p127e5bjsn4c9c2e73ef21",
    "x-rapidAPI-host": "mashape-community-urban-dictionary.p.rapidapi.com",
  },
};

const API_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

async function callUrbanDictionary() {
  const response = await fetch(API_URL, options);
  const results = await response.json();
  console.log(results);
}

callUrbanDictionary();
