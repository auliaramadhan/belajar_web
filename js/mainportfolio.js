//select dom

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBrand = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

//set state
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBrand.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //set state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBrand.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}
