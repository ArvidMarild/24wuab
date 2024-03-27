let layer = document.querySelector(".fade-layer");
layer.addEventListener("click", showMenu);

let button = document.querySelector(".menu-button");
button.addEventListener("click", showMenu);

function showMenu() {
  let menu = document.querySelector("nav.menu");
  menu.classList.toggle("show");

  let layer = document.querySelector(".fade-layer");
  layer.classList.toggle("visible");
}

let closeButton = document.getElementById("close-menu");
closeButton.addEventListener("click", hideMenu);

function hideMenu() {
  let menu = document.querySelector("nav.menu");
  menu.classList.remove("show");

  let layer = document.querySelector(".fade-layer");
  layer.classList.remove("visible");
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle("show-dropdown"); // Toggle the class
  });
}