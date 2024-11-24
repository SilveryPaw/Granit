import Swiper from "swiper";
import {Navigation} from 'swiper/modules';

const blockName = 'b-eleventh-screen';

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(`.${blockName}`).forEach(block => {
        const swiperBlock = block.querySelector(`.${blockName}__music-slider`);
        const index = block.dataset.index;
        const slides = block.querySelectorAll(`.${blockName}__music-slide`);
        const playBtn = block.querySelector(`.${blockName}__play`);

        let slider = new Swiper(swiperBlock, {
            modules: [Navigation],
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
        });

        playBtn.addEventListener('click', function() {
            const playing = block.querySelector(`.${blockName}__music-sound.active`);
            const index = slider.realIndex;
            const music = slides[index].querySelector(`.${blockName}__music-sound`);
            if(playing) {
                playing.pause();
                playing.currentTime = 0;
                playing.classList.remove('active');
            }
            if(playing !== music) {
                music.play();
                music.classList.add('active');
            }
        });
    });
});