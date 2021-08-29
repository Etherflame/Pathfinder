"use strict";
const btnHamburger = document.querySelector("#btnHamburger");
const menu = document.querySelector(".header__menu");

const btnSearch = document.querySelector("#btnSearch");
const form = document.querySelector(".header__search");

const wrapper = document.querySelector(".wrapper");

btnHamburger.addEventListener("click", function () {
  if (menu.classList.contains("open-menu")) {
    // Closing Menu
    menu.classList.remove("open-menu");
    btnSearch.classList.remove("none");
    wrapper.classList.remove("remove-width");
  } else {
    // Opening Menu
    menu.classList.add("open-menu");
    btnSearch.classList.add("none");
    wrapper.classList.add("remove-width");
  }
});

btnSearch.addEventListener("click", function () {
  if (form.classList.contains("open-search")) {
    // Closing Search
    form.classList.remove("open-search");
    btnHamburger.classList.remove("none");
    wrapper.classList.remove("remove-width");
  } else {
    // Opening Search
    form.classList.add("open-search");
    btnHamburger.classList.add("none");
    wrapper.classList.add("remove-width");
  }
});
