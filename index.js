const menuIcon = document.querySelector(".fa-bars");
const dropDownMenu = document.querySelector(".dropdown");
const homeSection = document.getElementById("home-section");
const submitComplaint = document.getElementById("submit-complaint");
const submit = document.querySelectorAll(".submit");
const home = document.querySelector(".hom");
const hom = document.querySelector(".home");
const body = document.body;
const sumit = document.querySelector(".sumit");

function setDisplay(el1, el2) {
  el1.style.display = "none";
  el2.style.display = "block";
}

submit.forEach((button) => {
  button.addEventListener("click", () => {
    setDisplay(homeSection, submitComplaint);
  sumit.classList.add("active");
  hom.classList.remove("active")
  });
});

home.addEventListener("click", () => {
  setDisplay(submitComplaint, homeSection);
  hom.classList.add("active");
  sumit.classList.remove("active")
});

menuIcon.addEventListener("click", () => {
  dropDownMenu.classList.toggle("open");
  if (dropDownMenu.classList.contains("open")) {
    menuIcon.classList.add("fa-x");
    menuIcon.classList.remove("fa-bars");
  } else {
    menuIcon.classList.remove("fa-x");
    menuIcon.classList.add("fa-bars");
  }
  // e.stopPropagation();
});
document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target) && !dropDownMenu.contains(e.target)) {
    dropDownMenu.classList.remove("open");
    menuIcon.classList.remove("fa-x");
    menuIcon.classList.add("fa-bars");
  }
});
