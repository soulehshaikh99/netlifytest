import {
    sideNavbar,
    sideNavbarOn,
    sideNavbarOff,
    hamburgerMenu,
    backToTopButton
} from './ui-elements.js';

import {
    scrollFunction,
    scrollToTop
} from './functions.js';

sideNavbarOn.addEventListener('click', () => {
    sideNavbar.classList.toggle('slide');
    hamburgerMenu.classList.toggle('opened');
});

sideNavbarOff.addEventListener('click', () => {
    sideNavbar.classList.toggle('slide');
    hamburgerMenu.classList.toggle('opened');
});

backToTopButton.addEventListener('click', scrollToTop);

window.onscroll = scrollFunction;