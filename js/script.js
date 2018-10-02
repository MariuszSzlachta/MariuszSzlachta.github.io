// All variables
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.navbar');
const navbarAnchorLinks = document.querySelectorAll('a[href*="#"]');
const element = document.querySelector('.carousel');
let inputs = document.querySelectorAll('.contact-form__input');
let textarea = document.querySelector('.contact-form__textarea');
const submitButton = document.querySelector('.submit');

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
navbarAnchorLinks.forEach(el => el.addEventListener('click', toggleMenu));
document.addEventListener('backbutton', toggleMenu);
// Carousel

const flkty = new Flickity(element, {
    cellAlign: 'left',
    contain: true,
    hash: true,
    pageDots: true,
    autoPlay: false,
    adaptiveHeight: true,
    prevNextButtons: false
});

// contact-form value checker for toggle styles
inputs = [...inputs];
inputs.forEach(el => el.addEventListener('mouseover', checkContent));
document.addEventListener("DOMContentLoaded", function(event) { 
  clearForm();
});

function checkContent(){
  textarea.value.length !== 0 ? textarea.classList.add('contact-form__textarea--not-empty') : textarea.classList.remove('contact-form__textarea--not-empty');
  inputs.forEach(el => {
    el.value.length !== 0 ? el.classList.add('contact-form__input--not-empty') : el.classList.remove('contact-form__input--not-empty');
  });
}
function clearForm() {
  textarea.value = '',
  inputs.forEach(el => el.value = '');
}

// Projects controll
const flktyVP = document.querySelector('.flickity-viewport');
const showDetailsBtns = document.querySelectorAll('[data-get="details"]');
const showPreviewBtns = document.querySelectorAll('[data-get="preview"]');
const previews = document.querySelectorAll('[data-content="preview"]');
const headings = document.querySelectorAll('[data-content="headings"]');
const details = document.querySelectorAll('[data-content="details"]');

// Listeners for show details
for (let i = 0; i < showDetailsBtns.length; i++) {
  showDetailsBtns[i].addEventListener('click', function(e){
    e.preventDefault();
    headings[i].classList.remove('headings--active');
    previews[i].classList.remove('preview--active');
    details[i].classList.add('details--active');
    flktyVP.classList.add('expanded');
  });
}
// Listeners for show preview
for (let i = 0; i < showPreviewBtns.length; i++) {
  showPreviewBtns[i].addEventListener('click', function(e){
    e.preventDefault();
    headings[i].classList.add('headings--active');
    previews[i].classList.add('preview--active');
    details[i].classList.remove('details--active');
    flktyVP.classList.remove('expanded');
  });
}
