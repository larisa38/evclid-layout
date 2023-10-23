
let swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    enabled: true,
    onlyInViewport: false,
  },

});

// work-tabs

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.list__step').forEach(function(e) {
    e.addEventListener('click', function(e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function(e) {
        e.classList.remove('tab-content--active')
        document.querySelector(`[data-target ='${tab}']`).classList.add('tab-content--active');
      });
    });
    e.addEventListener('click', function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll('list__step').forEach(function (e) {
        e.classList.remove('list__step--default');
        document.querySelector(`[data-path='${tabDefault}']`).classList.add('list__step--default');
      });
    });
    e.addEventListener('focus', function(e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function(e) {
        e.classList.remove('tab-content--active')
        document.querySelector(`[data-target ='${tab}']`).classList.add('tab-content--active');
      });
    });
    e.addEventListener('blur', function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll('list__step').forEach(function (e) {
        e.classList.remove('list__step--default');
        document.querySelector(`[data-path='${tabDefault}']`).classList.add('list__step--default');
      });
    });
  });
});

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//burger

const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
  menuBurger.classList.add('burger-active');
});

menuClose.addEventListener('click', () => {
  menuBurger.classList.remove('burger-active');
});

//search

const searchImg = document.querySelector('.search__img');
const searchClose = document.querySelector('.search__close');
const searchHidden = document.querySelector('.search-hidden');
const searchInput = document.querySelector('.input-hidden');
const searchBtn = document.querySelector('.btn__search');

searchImg.addEventListener('click', () => {
  searchHidden.classList.add('search-active');
});

searchClose.addEventListener('click', () => {
  searchHidden.classList.remove('search-active');
});

searchImg.addEventListener('focus', () => {
  searchHidden.classList.add('search-active');
});

searchClose.addEventListener('focus', (e) => {
  if (e.searchClose === 'Enter') {
    searchHidden.classList.remove('search-active');
  }
});

searchClose.onblur = function () {
  searchHidden.classList.remove('search-active');
}


