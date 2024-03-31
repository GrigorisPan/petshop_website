const navEl = document.querySelector('.nav-menu');
console.log(navEl);
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav-menu--open');
  hamburgerEl.classList.toggle('hamburger--open');
});

navEl.addEventListener('click', () => {
  navEl.classList.remove('nav-menu--open');
  hamburgerEl.classList.remove('hamburger--open');
});

/* Carousel  */
