'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// All variables
var nav = document.querySelector('.nav');
var hamburger = document.querySelector('.hamburger');
var navbar = document.querySelector('.navbar');
var navbarAnchorLinks = document.querySelectorAll('a[href*="#"]');
var element = document.querySelector('.carousel');
var inputs = document.querySelectorAll('.contact-form__input');
var textarea = document.querySelector('.contact-form__textarea');
var submitButton = document.querySelector('.submit');
var inputsLen = inputs.length;

// navbar show/hide
function toggleNavStyles() {
  if (pageYOffset >= 130 && pageYOffset <= 730) {
    nav.classList.add('nav--dark');
  } else {
    nav.classList.remove('nav--dark');
  };
};
document.addEventListener('scroll', toggleNavStyles);
// HAMBURGER

function toggleMenu() {
  if (hamburger.classList.contains('hamburger--toggled')) {
    nav.classList.remove('nav--toggled');
    navbar.classList.remove('navbar--toggled');
    hamburger.classList.remove('hamburger--toggled');
  } else {
    nav.classList.add('nav--toggled');
    navbar.classList.add('navbar--toggled');
    hamburger.classList.add('hamburger--toggled');
  };
}

hamburger.addEventListener('click', toggleMenu);
document.addEventListener('backbutton', toggleMenu);

for (var i = 0; i < navbarAnchorLinks.length; i++) {
  navbarAnchorLinks[i].addEventListener('click', toggleMenu);
}

// Carousel

var flkty = new Flickity(element, {
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: true,
  autoPlay: false,
  adaptiveHeight: true,
  prevNextButtons: true
});

// contact-form value checker for toggle styles
inputs = [].concat(_toConsumableArray(inputs));

for (var j = 0; j < inputsLen; j++) {
  inputs[j].addEventListener('mouseover', checkContent);
}

document.addEventListener("DOMContentLoaded", function (event) {
  clearForm();
});

function checkContent() {
  textarea.value.length !== 0 ? textarea.classList.add('contact-form__textarea--not-empty') : textarea.classList.remove('contact-form__textarea--not-empty');

  for (var _i = 0; _i < inputsLen; _i++) {
    inputs[_i].value.length !== 0 ? inputs[_i].classList.add('contact-form__input--not-empty') : inputs[_i].classList.remove('contact-form__input--not-empty');
  }
}
function clearForm() {
  textarea.value = '';
  for (var _i2 = 0; _i2 < inputsLen; _i2++) {
    inputs[_i2].value = '';
  };
};

// Projects controll
var flktyVP = document.querySelector('.flickity-viewport');
var showDetailsBtns = document.querySelectorAll('[data-get="details"]');
var showPreviewBtns = document.querySelectorAll('[data-get="preview"]');
var previews = document.querySelectorAll('[data-content="preview"]');
var headings = document.querySelectorAll('[data-content="headings"]');
var details = document.querySelectorAll('[data-content="details"]');

window.addEventListener('load', function () {
  flkty.resize();
});

// Listeners for show details

var _loop = function _loop(k) {
  showDetailsBtns[k].addEventListener('click', function (e) {
    e.preventDefault();
    headings[k].classList.remove('headings--active');
    previews[k].classList.remove('preview--active');
    details[k].classList.add('details--active');
    flkty.resize();
  });
};

for (var k = 0; k < showDetailsBtns.length; k++) {
  _loop(k);
}
// Listeners for show preview

var _loop2 = function _loop2(l) {
  showPreviewBtns[l].addEventListener('click', function (e) {
    e.preventDefault();
    headings[l].classList.add('headings--active');
    previews[l].classList.add('preview--active');
    details[l].classList.remove('details--active');
    flkty.resize();
    new WOW().init();
  });
};

for (var l = 0; l < showPreviewBtns.length; l++) {
  _loop2(l);
}

// modal
var modal = document.querySelector('.modal');
var modalClose = document.querySelector('.modal__close');
document.addEventListener("DOMContentLoaded", function (event) {
  if (navigator.userAgent.match(/Trident\/7.0;/) !== null) {
    modal.classList.add('modal--opened');
  }
});

modalClose.addEventListener('click', function () {
  modal.classList.remove('modal--opened');
});
// Animations fire
// on reveal
new WOW().init();
// on slide change
flkty.on('settle', function(){
  new WOW().init();
});