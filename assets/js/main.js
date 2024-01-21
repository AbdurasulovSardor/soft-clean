let navToggle = document.querySelector(".nav__toggle")
let nav = document.querySelector(".nav__info")
let toggleIcon = document.getElementById("toggle-icon")

navToggle.addEventListener("click", () => {
  nav.classList.toggle("showNav")
  if (nav.classList[1] == 'showNav') {
    toggleIcon.src = "assets/images/icons/close.svg"
    return
  }
  toggleIcon.src = "assets/images/icons/hamburger.svg"
})