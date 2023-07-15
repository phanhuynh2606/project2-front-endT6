const menuToggle = document.querySelector('.inner-menu-mobi');
const menu = document.querySelector('#menu');
const change = document.querySelector('.inner-menu-mobi');
// const narv = document.querySelector('navbar-menu');
menuToggle.addEventListener('click', function() {
  menu.classList.toggle("show-menu");
  change.classList.toggle("change");
  // narv.classList.toggle("column");
});