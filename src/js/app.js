import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const setHeaderLinks = () => {
    const links = document.querySelectorAll('.header__link');
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
            linkBg.style.width = `${window.innerWidth}px`;
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
            linkBg.style.width = `${window.innerWidth}px`;
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

window.addEventListener('load', () => {
    setHeaderLinks()
    headerMenu()
})

window.addEventListener('resize', () => {
    setHeaderLinks()
})