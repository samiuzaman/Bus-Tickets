// Select HTML Element
const barIcon = document.getElementById("bar-icon");
const crossIcon = document.getElementById("cross-icon");
const navMenu = document.getElementById("nav-menu");

barIcon.addEventListener("click", function () {
  barIcon.classList.add("hidden");
  crossIcon.classList.remove("hidden");
  navMenu.classList.remove("hidden");
});

crossIcon.addEventListener("click", function () {
  crossIcon.classList.add("hidden");
  navMenu.classList.add("hidden");
  barIcon.classList.remove("hidden");
});
