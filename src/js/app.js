import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination, Thumbs, EffectCoverflow } from 'swiper';

const swiper = new Swiper();

const setHeaderLinks = () => {
    const links = document.querySelectorAll('.header__link');
    const windowWidth = `${document.body.clientWidth}px`;
    links.forEach(el => {
        if(el.classList.contains('active')){
            if(!el.querySelector('.header__link-bg')){
                const linkBg = document.createElement('div');
                linkBg.classList.add('header__link-bg');
                el.append(linkBg);
            }
            const linkBg = el.querySelector('.header__link-bg');
            const rect = el.getBoundingClientRect();
            const left = rect.left;
            linkBg.style.left = `-${left}px`
            linkBg.style.width = windowWidth;
        }
        if(!el.classList.contains('active')){
            if(!el.querySelector('.header__link-hover')){
                const linkBg = document.createElement('div');
                linkBg.classList.add('header__link-hover');
                el.append(linkBg);
            }
            const linkBg = el.querySelector('.header__link-hover');
            const rect = el.getBoundingClientRect();
            const left = rect.left;
            linkBg.style.left = `-${left}px`
            linkBg.style.width = windowWidth;
        }
    })
}

const headerMenu = () => {
    const headerButton = document.querySelector(".header__button");
    const headerMenu = document.querySelector(".header__menu");
    const headerLogo = document.querySelector(".header__logo");
    let menuOpened = false;
    const menuToggle = () => {
      menuOpened = !menuOpened;
      headerButton.classList.toggle("open");
      headerMenu.classList.toggle("open");
      headerLogo.classList.toggle("menu-open");
    };
    
    headerButton.onclick = menuToggle;
    
    window.onclick = (e) => {
      if (
        menuOpened &&
        !e.composedPath().includes(headerButton) &&
        !e.composedPath().includes(headerMenu)
      )
        menuToggle();
    };
}

const gamePlaySwiper = () => {
    var swiper1 = new Swiper(".gameplay__pagination", {
        spaceBetween: 4,
        slidesPerView: "auto",
        watchSlidesProgress: true,
        centeredSlides: true,
        initialSlide: 2,
        allowTouchMove: true,
        breakpoints: {
            400: {
                allowTouchMove: false,
            }
        }
    });

    new Swiper(".gameplay__thumb", {
        modules: [Thumbs, EffectCoverflow],
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 2,
        thumbs: {
            swiper: swiper1,
        },
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0,
            stretch: -80,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
    });
}

const heroSlider = () => {
    var swiper1 = new Swiper(".hero__content", {
        spaceBetween: 4,
        slidesPerView: "auto",
        watchSlidesProgress: true,
        centeredSlides: true,
        initialSlide: 2,
    });
}

window.addEventListener('load', () => {
    setHeaderLinks()
    headerMenu()
    if(document.querySelector('.gameplay__pagination')){
        gamePlaySwiper()
    }
    if(document.querySelector('.hero__content')){
        heroSlider()
    }
})

window.addEventListener('resize', () => {
    setHeaderLinks()
})


