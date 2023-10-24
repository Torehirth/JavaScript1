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

for (let i = 0; i < products.length; i++) {
  const productDiv = document.createElement("div"); // Create new div element for each product.

  productDiv.classList.add("itemcontainer"); // Create a html class for each new html element.

  productContainer.appendChild(productDiv); // Add new element under selected html element.

  if (!products[i].price) {
    products[i].price = "Unavailable";
  }

  let colour = "green";

  if (products[i].soldOut) {
    colour = "red";
    products[i].soldOut = "Not in stock";
  } else {
    products[i].soldOut = "In stock";
  }

  productDiv.innerHTML = `
  <h3 style="color: ${colour}">${products[i].name}</h3>
  <p>${products[i].price}</p>
  <p>${products[i].soldOut}</p>   
  `;
}

//-------------------------------------------------------------------
