import {
    scrollToTop,
    scrollToBottom
} from './functions.js';

document.addEventListener('keydown', function (event) {
    // Go to the top of page
    if (event.code == 'ArrowUp' && (event.ctrlKey || event.metaKey)) {
        scrollToTop();
        return;
    }
    // Go to the bottom of page
    if (event.code == 'ArrowDown' && (event.ctrlKey || event.metaKey)) {
        scrollToBottom();
        return;
    }
});