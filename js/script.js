// Module 1 Lesson task 2

// Question 1

const heading = document.querySelector("h3");
heading.innerText = "Hello";

// Question 2

const headings = document.querySelectorAll("h4");

for (let i = 0; i < headings.length; i++) {
  headings[i].style.marginBottom = "-20px";
}

// Question 3

headings[1].style.backgroundColor = "red";

// Question 4

const paragraphs = document.querySelectorAll("p");

for (let i = 0; paragraphs.length; i++) {
  paragraphs[0].style.fontSize = "24px";
  paragraphs[0].style.color = "blue";
  break;
}

// or

// const firstParagraph = document.querySelector("p.one");
// firstParagraph.style.fontSize = "24px";
// firstParagraph.style.color = "blue";

// Question 5

const thirdParagraph = document.querySelector("p.three");
thirdParagraph.innerHTML = `<span>${thirdParagraph.innerHTML}</span>`;

// Question 6

const containerContent = document.querySelector(".content");

containerContent.innerHTML += `<p>Another paragraph</p>`;

// Question 7

const contentParagraphs = document.querySelectorAll(".content p");

for (let i = 0; i < contentParagraphs.length; i++) {
  contentParagraphs[i].classList.add("content-item");
}
// Question 8

const newListItem = document.querySelector("#services");

newListItem.innerHTML = `<li>New list item</li>  ${newListItem.innerHTML}`;

// Question 9

const ulClass = document.querySelector("#services");

ulClass.classList.remove("service-list");

// Question 10

const hideElement = document.querySelector("#hide");

hideElement.style.display = "none";
