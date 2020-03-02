const menuToggler = document.getElementById('navbar-toggler');
const sideNavbar = document.getElementById('navbar-side');
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarSideToggler = document.getElementById('navbar-side-toggler');
const backToTopButton = document.getElementById("back-to-top-btn");

const scrollThreshold = 200;

function scrollFunction() {
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold)
        backToTopButton.classList.add('active');
    else backToTopButton.classList.remove('active');
}

menuToggler.addEventListener('click', () => {
    sideNavbar.classList.toggle('slide');
    hamburgerMenu.classList.toggle('opened');
});

navbarSideToggler.addEventListener('click', () => {
    sideNavbar.classList.toggle('slide');
    hamburgerMenu.classList.toggle('opened');
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
});

window.onscroll = () => scrollFunction();