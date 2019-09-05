const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");
const navLink = document.querySelectorAll(".nav-link");
const brand = document.getElementById("brand");

let showMenu = false;

const toggle = () => {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menuNav.classList.add("show");
    navItem.forEach(i => i.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menuNav.classList.remove("show");
    navItem.forEach(i => i.classList.remove("show"));
    showMenu = false;
  }
};

const borderBottom = function() {
  navLink.forEach(link => link.classList.remove("active"));

  this.classList.add("active");
};

// Hamburget Menu

menuBtn.addEventListener("click", toggle);

// Hover - Border bottom

navLink.forEach(nav => {
  nav.addEventListener("mouseover", borderBottom);
});

// Home - Text effect

const showText = () => {
  brand.classList.add("text-show");
};

setTimeout(showText, 500);
