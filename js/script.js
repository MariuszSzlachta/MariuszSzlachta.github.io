// navbar show/hide

const nav = document.querySelector('nav');

// function toggleNavVisibility() {
//   if (pageYOffset)
// }

// Carousel

const element = document.querySelector('.carousel');
const flkty = new Flickity(element, {
    cellAlign: 'left',
    contain: true,
    hash: true,
    pageDots: true
});

// Projects controll

// Project-1

const showDetailsButton1 = document.querySelector('[data-get-details="1"]');
const details1 = document.querySelector('[data-details="1"]');
const preview1 = document.querySelector('[data-preview="1"]');
const headings1 = document.querySelector('[data-headings="1"]');

showDetailsButton1.addEventListener('click', function(e){
    e.preventDefault();
    headings1.classList.remove('headings--active');
    preview1.classList.remove('preview--active');
    details1.classList.add('details--active');
})
