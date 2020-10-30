"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".swiper-container", {
    loop: true,
    effect: "fade",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
