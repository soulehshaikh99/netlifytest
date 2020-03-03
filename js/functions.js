import { scrollThreshold } from './constants.js';
import { backToTopButton } from './ui-elements.js';

function scrollFunction() {
    if (document.documentElement.scrollTop > scrollThreshold || document.body.scrollTop > scrollThreshold)
        backToTopButton.classList.add('active');
    else backToTopButton.classList.remove('active');
}

function scrollTo(x, y) {
    window.scrollTo(x, y);
}

function scrollToTop() {
    scrollTo(0, 0);
}

function scrollToBottom() {
    scrollTo(0, document.documentElement.scrollHeight || document.body.scrollHeight);
}

export {
    scrollFunction,
    scrollToTop,
    scrollToBottom
};