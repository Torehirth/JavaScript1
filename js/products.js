const products = [
  {
    name: "Fancy Product",
    price: 40,
    soldOut: true,
  },
  {
    name: "Another Product",
    soldOut: false,
  },
  {
    name: "Cheap Product",
    price: 10,
    soldOut: true,
  },
];

const productContainer = document.querySelector(".container"); // Select element/place of display.

// ForEach function
//-------------------------------------------------------------------
// products.forEach((product) => {
//   const productDiv = document.createElement("div");
//   productDiv.classList.add("itemcontainer");

//   productDiv.innerHTML = `
//       <h3>${product.name}</h3>
//       <p>Price: ${product.price || "Not available"}</p>
//       <p>Sold Out: ${product.soldOut ? "Yes" : "No"}</p>
//   `;
//   productContainer.appendChild(productDiv);
// });
//-------------------------------------------------------------------

// or

// For loop
//-------------------------------------------------------------------

// // let html = "";

for (let i = 0; i < products.length; i++) {
  const productDiv = document.createElement("div"); // Create new div element for each product.

  productDiv.classList.add("itemcontainer"); // Create a html class for each new html element.

  productContainer.appendChild(productDiv); // Add new element under selected html element.

  let itemPrice = "Unavailable";

  if (products[i].price) {
    itemPrice = products[i].price;
  }

  productDiv.innerHTML = `
  <h3>${products[i].name}</h3>
  <p>${products[i].price}</p>
  <p>${products[i].soldOut}</p>   
  `;
}

//-------------------------------------------------------------------
