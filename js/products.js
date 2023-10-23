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

// productContainer.innerHTML = `<h3>${product.name}</h3>
//                                 <p>${product.price}</p>
//                                 <p>${product.soldOut}</p>`

const productContainer = document.querySelector(".container");

for (let i = 0; i < products.length; i++) {
  products[i].name = `<h3>${product.name}</h3>`;
}
