import Swiper from "swiper/bundle";
import {Navigation} from "swiper/modules";

const blockName = 'b-eleventh-screen';

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(`.${blockName}`).forEach(block => {
        const minDeskWidth = 1280;
        const swiperBlock = block.querySelector(`.${blockName}__music-slider`);
        const index = block.dataset.index;
        const slides = block.querySelectorAll(`.${blockName}__music-slide`);
        const playBtn = block.querySelector(`.${blockName}__play`);

        const optionsMobile = {
            wrapperClass: `${blockName}__music-wrapper`,
            slideClass: `${blockName}__music-slide`,
            slideActiveClass: `${blockName}__music-slide--active`,
            slideNextClass: `${blockName}__music-slide--next`,
            slidePrevClass: `${blockName}__music-slide--prev`,
            navigation: {
                prevEl: `.${blockName}__controls[data-index="${index}"] .${blockName}__nav-elem.prev`,
                nextEl: `.${blockName}__controls[data-index="${index}"] .${blockName}__nav-elem.next`,
                disabledClass: `${blockName}__nav-elem--disabled`
            },
            spaceBetween: 5,
            slidesPerView: 1,
            slidesPerGroup: 1,
            allowTouchMove: false,
            speed: 1000,
            on: {
                slideChangeTransitionStart: function() {
                    const playing = block.querySelector(`.${blockName}__music-sound.active`);
                    if(playing) {
                        playing.pause();
                        playing.currentTime = 0;
                        playing.classList.remove('active');
                    }
                }
            }
        }

        const count = block.querySelectorAll(`.${blockName}__music-slide`).length;
        const startIndex = Math.floor(count / 2);

        const optionsDesk = {
            wrapperClass: `${blockName}__music-wrapper`,
            slideClass: `${blockName}__music-slide`,
            slideActiveClass: `${blockName}__music-slide--active`,
            slideNextClass: `${blockName}__music-slide--next`,
            slidePrevClass: `${blockName}__music-slide--prev`,
            navigation: {
                prevEl: `.${blockName}__controls[data-index="${index}"] .${blockName}__nav-elem.prev`,
                nextEl: `.${blockName}__controls[data-index="${index}"] .${blockName}__nav-elem.next`,
                disabledClass: `${blockName}__nav-elem--disabled`
            },
            spaceBetween: 5,
            allowTouchMove: false,
            slidesPerView: 'auto',
            centeredSlides: true,
            initialSlide: startIndex,
            on: {
                slideChangeTransitionStart: function() {
                    const playing = block.querySelector(`.${blockName}__music-sound.active`);
                    if(playing) {
                        playing.pause();
                        playing.currentTime = 0;
                        playing.classList.remove('active');
                    }
                }
            }
        }

        let slider;

        if(window.innerWidth >= minDeskWidth) {
            slider = new Swiper(swiperBlock, optionsDesk);
        } else {
            slider = new Swiper(swiperBlock, optionsMobile);
        }
    });
});