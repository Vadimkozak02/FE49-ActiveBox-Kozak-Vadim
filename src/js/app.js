new Swiper('.slider', {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// burger menu
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-navigation');
    const menuClose = document.querySelector('.header-nav__close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-navigation-active');
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header-navigation-active');
    });
}());