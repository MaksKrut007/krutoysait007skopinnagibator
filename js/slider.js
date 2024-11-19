const aboutSlider = new Swiper(".about-slider", {
  autoplay: {
    delay: 3000,
  },
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 15,
  grabCursor: true,
  pagination: {
    el: ".about-slider-pagination",
    clickable: true,
  },
  breakpoints: {
    744: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
  },
});
