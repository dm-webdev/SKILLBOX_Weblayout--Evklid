"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const showText = document.querySelectorAll(".question__btn");
  const text = document.querySelectorAll(".question__text");

  const arrayElements = [];
  for (let i = 0; i < showText.length; i++) {
    arrayElements.push(showText[i]);
  }

  showText.forEach(function (element) {
    element.addEventListener("click", function (ev) {
      console.log(element);
      let key = arrayElements.indexOf(ev.target);

      ev.target.classList.toggle("btn_hide");
      text[key].classList.toggle("text_hide");

      if (ev.target.getAttribute("aria-label") == "открыть ответ на вопрос") {
        ev.target.setAttribute("aria-label", "скрыть ответ на вопрос");
      } else if (
        ev.target.getAttribute("aria-label") == "скрыть ответ на вопрос"
      ) {
        ev.target.setAttribute("aria-label", "открыть ответ на вопрос");
      }
    });
  });
});
