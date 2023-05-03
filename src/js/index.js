const navTogglerBox = document.querySelector('.navigation-toggler-box');
const navToggler = document.querySelector('.navigation-toggler');
const nav = document.querySelector('.navigation');
const header = document.querySelector('header');

navTogglerBox.addEventListener('click', ({ target }) => {
    navToggler.classList.toggle('active');
    nav.classList.toggle('active');
});

document.addEventListener('click', ({ target }) => {
    if (target != navTogglerBox && target != navToggler) {
        navToggler.classList.remove('active');
        nav.classList.remove('active');
    }
});

window.addEventListener('scroll', handleStickyHeader);
window.addEventListener('load', handleStickyHeader);

function handleStickyHeader({ target }) {
    const intro = document.querySelector('.intro');
    const introHeight = intro.offsetHeight;
    const headerHeight = header.offsetHeight;
    const introTop = document
        .querySelector('.intro')
        .getBoundingClientRect().top;

    if (introTop < headerHeight - introHeight) {
        header.classList.add('fixed');
        intro.style.marginTop = `${headerHeight}px`;
    } else {
        header.classList.remove('fixed');
        intro.style.marginTop = 'unset';
    }
}
