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
  navbarMenu.classList.remove('open');
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
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Create arrow-up button and functionality
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', (event) => {
  scrollIntoView('#home');
});

// Filter projects
const projectsBtn = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

projectsBtn.addEventListener('click', (event) => {
  const target = event.target;
  const filter = target.dataset.filter || target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  //   Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const buttonTarget =
    event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
  buttonTarget.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

// Add navbar menu on menu click from small screen
const menuSelected = document.querySelector('.navbar_toggle-btn');

menuSelected.addEventListener('click', () => {
  console.log(navbarMenu);
  navbarMenu.classList.toggle('open');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
