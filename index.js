let menuToggler = document.getElementById('navbar-toggler');
let sideNavbar = document.getElementById('navbar-side');
let hamburgerMenu = document.getElementById('hamburger-menu');
let navbarSideToggler = document.getElementById('navbar-side-toggler');

menuToggler.addEventListener('click', () => {
    sideNavbar.classList.toggle('slide');
    hamburgerMenu.classList.toggle('opened');
});

navbarSideToggler.addEventListener('click', () => {
    sideNavbar.classList.toggle('slide');
    hamburgerMenu.classList.toggle('opened');
});