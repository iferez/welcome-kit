function debounce(func, delay) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
    };
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function handleScroll() {
    const height_activate = 400;
    const button = document.querySelector('.scroll-to-top');
    const header = document.querySelector('header');
    const containerHeader = document.querySelector('.container-header');

    const activateScroll = document.body.scrollTop > height_activate || document.documentElement.scrollTop > height_activate;

    button.classList.toggle('show', activateScroll);
    header.classList.toggle('fixed-btn', activateScroll);
    containerHeader.classList.toggle('container', activateScroll);
}

const debouncedScroll = debounce(handleScroll, 100); // Retraso para evitar muchas ejecuciones
window.onscroll = debouncedScroll;
document.addEventListener('DOMContentLoaded', handleScroll);
