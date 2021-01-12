'use strict';

// Make navbar transparent when it is on the top of the page
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Handle contact me button
const contactMeButton = document.querySelector('.home__button');
contactMeButton.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Handle Home fading out as scroll
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
console.log(homeHeight * 0.5);
document.addEventListener('scroll', () => {
  console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
