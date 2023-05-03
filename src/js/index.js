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

window.addEventListener('scroll', function () {
    const introHeight = document.querySelector('.intro').offsetHeight;
    const introTop = document
        .querySelector('.intro')
        .getBoundingClientRect().top;

    if (introTop < -introHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});
