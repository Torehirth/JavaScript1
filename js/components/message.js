const message = function (type, value) {
  const className = document.querySelector(".message");

  className.classList.add(type);

  className.innerText = value;

}