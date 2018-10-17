// All variables
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.navbar');
const navbarAnchorLinks = document.querySelectorAll('a[href*="#"]');
const element = document.querySelector('.carousel');
let inputs = document.querySelectorAll('.contact-form__input');
let textarea = document.querySelector('.contact-form__textarea');
const submitButton = document.querySelector('.submit');
let inputsLen = inputs.length;

// navbar show/hide
function toggleNavStyles(){
  if (pageYOffset >= 130 && pageYOffset <= 730){
    nav.classList.add('nav--dark');
  } else {
    nav.classList.remove('nav--dark');
  };
};
document.addEventListener('scroll', toggleNavStyles);
// HAMBURGER

function toggleMenu(){
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

for (let i = 0; i < navbarAnchorLinks.length; i++) {
  navbarAnchorLinks[i].addEventListener('click', toggleMenu);
}

// Carousel

const flkty = new Flickity(element, {
    cellAlign: 'left',
    contain: true,
    hash: true,
    pageDots: true,
    autoPlay: false,
    adaptiveHeight: true,
    prevNextButtons: true
});

// contact-form value checker for toggle styles
inputs = [...inputs];

for (let j = 0; j < inputsLen; j++) {
  inputs[j].addEventListener('mouseover', checkContent);
}

document.addEventListener("DOMContentLoaded", function(event) { 
  clearForm();
});

function checkContent(){
  textarea.value.length !== 0 ? textarea.classList.add('contact-form__textarea--not-empty') : textarea.classList.remove('contact-form__textarea--not-empty');

  for (let i = 0; i < inputsLen; i++) {
    inputs[i].value.length !== 0 ? inputs[i].classList.add('contact-form__input--not-empty') : inputs[i].classList.remove('contact-form__input--not-empty');
  }
}
function clearForm() {
  textarea.value = '';
  for (let i = 0; i < inputsLen; i++) {
    inputs[i].value = '';
  };
};

// Projects controll
const flktyVP = document.querySelector('.flickity-viewport');
const showDetailsBtns = document.querySelectorAll('[data-get="details"]');
const showPreviewBtns = document.querySelectorAll('[data-get="preview"]');
const previews = document.querySelectorAll('[data-content="preview"]');
const headings = document.querySelectorAll('[data-content="headings"]');
const details = document.querySelectorAll('[data-content="details"]');
const detailsActive = document.getElementsByClassName('details--active');

window.addEventListener('load', function(){
  flkty.resize();
})

// Listeners for show details
for (let k = 0; k < showDetailsBtns.length; k++) {
  showDetailsBtns[k].addEventListener('click', function(e){
    e.preventDefault();
    headings[k].classList.remove('headings--active');
    previews[k].classList.remove('preview--active');
    details[k].classList.add('details--active');
    flkty.resize();
  });
}
// Listeners for show preview
for (let l = 0; l < showPreviewBtns.length; l++) {
  showPreviewBtns[l].addEventListener('click', function(e){
    e.preventDefault();
    headings[l].classList.add('headings--active');
    previews[l].classList.add('preview--active');
    details[l].classList.remove('details--active');
    flkty.resize();
    new WOW().init();
  });
}

// modal
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
document.addEventListener("DOMContentLoaded", function(event) {
  if (navigator.userAgent.match(/Trident\/7.0;/) !== null){
    modal.classList.add('modal--opened');
  }
});

modalClose.addEventListener('click', function(){
  modal.classList.remove('modal--opened');
});
