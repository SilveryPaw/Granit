import Swiper from 'swiper/bundle';

const blockName = 'b-sixteenth-screen';

document.addEventListener('DOMContentLoaded', function() {
    const block = document.querySelector(`.${blockName}`);
    
    block.querySelectorAll(`.${blockName}__partners-chunk`).forEach((sliderBlock, id) => {
        let reverse = id % 2 == 0 ? true : false;
        new Swiper(sliderBlock, {
            wrapperClass: `${blockName}__partners-wrapper`,
            slideClass: `${blockName}__partner`,
            loop: true,
            slidesPerView: 'auto',
            speed: 2000,
        });
    });
});