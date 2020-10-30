"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const showButton = document.querySelector(".burger");
  const hideButton = document.querySelector(".close-btn");
  const menu = document.querySelector(".header-nav");
  menu.inert = true;

  showButton.addEventListener("click", () => showMenu(menu));

  menu.addEventListener("click", function (ev) {
    console.log(ev.target.tagName);
    if (ev.target == hideButton || ev.target.tagName == "A") {
      hideMenu(menu);
    }
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.code == "Escape") {
      hideMenu(menu);
    }
  });

  function showMenu(element) {
    element.classList.toggle("header-nav_active");
    console.log(element.className);
    if (element.className == "header-nav_active") {
      element.inert = true;
    } else {
      element.inert = false;
    }
  }

  function hideMenu(element) {
    element.classList.remove("header-nav_active");
    element.inert = true;
  }
});
