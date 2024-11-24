import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const blockName = 'b-sixteenth-screen';

document.addEventListener('DOMContentLoaded', function() {
    const block = document.querySelector(`.${blockName}`);
    
    block.querySelectorAll(`.${blockName}__partners-chunk`).forEach((sliderBlock, id) => {
        let reverse = id % 2 == 0 ? true : false;
        new Swiper(sliderBlock, {
            modules: [Autoplay],
            wrapperClass: `${blockName}__partners-wrapper`,
            slideClass: `${blockName}__partner`,
            loop: true,
            slidesPerView: 'auto',
            speed: 2000,
            autoplay: {
                delay: 0,
                reverseDirection: reverse
            }
        });
    });
});