
let show = true;
const nav = document.querySelector(".header__nav-container");
const menuToggle = nav.querySelector(".header__nav-mobile");
const linksNav = nav.querySelectorAll(".header__nav-item");

const addEvent = links => {
  links.forEach(element => {
    element.addEventListener("click", menuResponsive)
  });
};

const removeEvent = links => {
  links.forEach(element => {
    element.removeEventListener("click", menuResponsive);
  });
};

const menuResponsive = () => {
  document.body.style.overflow = show ? "hidden" : "initial";
  show ? addEvent(linksNav) : removeEvent(linksNav);
  nav.classList.toggle("header__nav-mobile-active", show);
  show = !show;
}

menuToggle.addEventListener("click", menuResponsive);