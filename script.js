// open close button 

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click", () => menuOpenButton.click())
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click())

});
// Correct Swiper Initialization
const initSwiper = () => {
  new Swiper('.slider-container', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
      240: { slidesPerView: 1 },
      768: { slidesPerView: 3 }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
};

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
  initSwiper();



  menuOpenButton.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.add("active");
  });

  menuCloseButton.addEventListener("click", (e) => {
    navMenu.classList.remove("active");
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-menu') && !e.target.closest('#menu-open-button')) {
      navMenu.classList.remove("active");
    }
  });
});