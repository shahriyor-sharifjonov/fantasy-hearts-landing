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
    new Swiper(".hero__swiper", {
        modules: [Navigation],
        slidesPerView: "auto",
        roundLengths: true,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".hero__next",
            prevEl: ".hero__prev",
        },
    });
}

const articlesSlider = () => {
    new Swiper(".articles__swiper", {
        modules: [Navigation],
        slidesPerView: 1.03,
        spaceBetween: 15,
        navigation: {
            nextEl: ".articles__next",
            prevEl: ".articles__prev",
        },
        breakpoints: {
            576: {
                slidesPerView: "auto",
                spaceBetween: 32,
            }
        }
    });
}

const generateStars = () => {
    const showcase = document.querySelector('.showcase .stars');
  
    const getRandomNumber = (max = 100, min = 0) => Math.floor(Math.random() * (max - min + 1) + min)
    
    const starCreator = () => {
        const starSize = getRandomNumber(6, 3) + "px";
        const starTop = getRandomNumber() + "%";
        const starLeft = getRandomNumber() + "%";
        const starDuration = getRandomNumber(8000, 3000) + "ms";
        const star = document.createElement("span");
        star.classList.add("star");
        star.style.height = starSize;
        star.style.width = starSize;
        star.style.top = starTop;
        star.style.left = starLeft;
        star.style.animationDuration = starDuration;
        showcase.insertAdjacentElement("beforeend", star);
    };
  
    const starNum = window.innerWidth / 3;
  
    for (let i = 0; i < starNum; i++) {
        starCreator();
    }
}
  
const generateFlyingStars = () => {
    const showcase = document.querySelector('.showcase');

    const getRandomNumber = (max = 100, min = 0) => Math.floor(Math.random() * (max - min + 1) + min)
    const starDuration = 500;

    const starCreator = () => {
        const starTop = getRandomNumber() + "%";
        const starLeft = getRandomNumber() + "%";
        const star = document.createElement("span");
        star.classList.add("flying-star");
        star.style.top = starTop;
        star.style.left = starLeft;
        star.style.animationDuration = starDuration + "ms";
        showcase.insertAdjacentElement("beforeend", star);
        setTimeout(() => {
        star.remove();
        }, 500);
    };

    setInterval(() => {
        starCreator()
        starCreator()
    }, 595);
}

window.addEventListener('load', () => {
    setHeaderLinks()
    headerMenu()
    if(document.querySelector('.gameplay__pagination')){
        gamePlaySwiper()
    }
    if(document.querySelector('.hero__swiper')){
        heroSlider()
    }
    if(document.querySelector('.articles__swiper')){
        articlesSlider()
    }
    if(document.querySelector('.showcase')){
        generateFlyingStars()
        generateStars()
    }
})

window.addEventListener('resize', () => {
    setHeaderLinks()
})


