const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");
const navLink = document.querySelectorAll(".nav-link");
const brand = document.getElementById("brand");
const header = document.querySelector("header");
const body = document.querySelector("body");

let showMenu = false;

// Hamburger Menu

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

menuBtn.addEventListener("click", toggle);

//! Hover - Menu Border bottom effect

const borderBottom = function() {
  navLink.forEach(link => link.classList.remove("active"));

  this.classList.add("active");
};

navLink.forEach(nav => {
  nav.addEventListener("mouseover", borderBottom);
});

// Close menu when click outside of menu.

// const closingMenu = e => {
//   if (e.target !== menuBtn && e.target !== navLink) {
//     menuBtn.classList.remove("close");
//     menuNav.classList.remove("show");
//     navItem.forEach(i => i.classList.remove("show"));
//     showMenu = false;
//   }
// };

// body.addEventListener("click", closingMenu);

// Image Gallery

const imageGallery = () => {
  const selected = document.querySelector(".img-selected");
  const previews = document.querySelectorAll(".img-preview img");

  const showImg = e => {
    previews.forEach(preview => preview.classList.remove("img-active"));

    const selectedSrc = e.target.src;

    selected.src = selectedSrc;

    e.target.classList.add("img-active");
  };

  previews.forEach(preview => {
    preview.addEventListener("click", showImg);
  });
};

imageGallery();
