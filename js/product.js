// Module 1 Lesson task 3

const product = {
  name: "Fancy Product",
  price: 99,
  onSale: true,
};

const container = document.querySelector(".productcontainer");

let html = "";

if (!product.price) {
  product.price = "Not available";
}

let saleUnderline = "none";
let saleAnswer = "no";

if (product.onSale) {
  saleUnderline = "underline";
  saleAnswer = "yes";
} else {
  saleAnswer = "no";
}

html += `
<h3 style="text-decoration: ${saleUnderline}">${product.name}</h3>
<p>Price: ${product.price}$</p>
<p>On sale: ${saleAnswer}</p>
`;

container.innerHTML = html;
