// navbar show/hide

const nav = document.querySelector('.nav');

function toggleNavStyles(){
  if (pageYOffset >= 130 && pageYOffset <= 730){
    nav.classList.add('nav--dark');
  } else {
    nav.classList.remove('nav--dark');
  }
}
document.addEventListener('scroll', toggleNavStyles); 
// Carousel

const element = document.querySelector('.carousel');
const flkty = new Flickity(element, {
    cellAlign: 'left',
    contain: true,
    hash: true,
    pageDots: true,
    autoPlay: false,
    adaptiveHeight: true,
    prevNextButtons: false
});

// Projects controll

// Project-1

const showDetailsButton1 = document.querySelector('[data-get-details="1"]');
const showPreviewButton1 = document.querySelector('[data-get-preview="1"]');
const details1 = document.querySelector('[data-details="1"]');
const preview1 = document.querySelector('[data-preview="1"]');
const headings1 = document.querySelector('[data-headings="1"]');
const flktyVP = document.querySelector('.flickity-viewport');

showDetailsButton1.addEventListener('click', function(e){
    e.preventDefault();
    headings1.classList.remove('headings--active');
    preview1.classList.remove('preview--active');
    details1.classList.add('details--active');
    flktyVP.classList.add('expanded');
});

showPreviewButton1.addEventListener('click', function(e){
    e.preventDefault();
    headings1.classList.add('headings--active');
    preview1.classList.add('preview--active');
    details1.classList.remove('details--active');
    flktyVP.classList.remove('expanded');
})