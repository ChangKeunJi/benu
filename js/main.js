const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");
const navLink = document.querySelectorAll(".nav-link");
const brand = document.getElementById("brand");
const header = document.querySelector("header");
const body = document.querySelector("body");

const imgSlides = document.querySelectorAll(".img-slider");
const arrowRight = document.querySelector(".fa-arrow-right");
const arrowLeft = document.querySelector(".fa-arrow-left");

let showMenu = false;

// Hamburger Menu

const toggle = () => {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menuNav.classList.add("show");
    navItem.forEach(i => i.classList.add("show"));
    if (arrowRight) {
      arrowRight.style.display = "none";
    }
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menuNav.classList.remove("show");
    navItem.forEach(i => i.classList.remove("show"));
    if (arrowLeft) {
      arrowRight.style.display = "block";
    }
    showMenu = false;
  }
};

menuBtn.addEventListener("click", toggle);

// Hover - Menu Border bottom effect

const borderBottom = function() {
  navLink.forEach(link => link.classList.remove("active"));

  this.classList.add("active");
};

navLink.forEach(nav => {
  nav.addEventListener("mouseover", borderBottom);
});

// ABOUT - Image Gallery

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

// TEAM - Image Slider

let current = 0;

const reset = () => {
  imgSlides.forEach(slide => {
    slide.style.display = "none";
  });
};

const slideStart = () => {
  reset();
  imgSlides[0].style.display = "inherit";
};

arrowRight.addEventListener("click", () => {
  reset();
  if (current === 3) {
    current = -1;
  }

  imgSlides[current + 1].style.display = "inherit";
  current++;
});

arrowLeft.addEventListener("click", () => {
  reset();
  if (current === 0) {
    current = 4;
  }

  imgSlides[current - 1].style.display = "inherit";

  current--;
});

slideStart();
