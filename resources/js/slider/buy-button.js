const className = 'b-buy-button';
const pageClass = 'b-page';

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector(`.${className}`);
    const frame = document.querySelector(`.${pageClass}__buy-frame`);

    button.addEventListener('click', function() {
        frame.classList.toggle('active');
    });

    frame.addEventListener('click', function(e) {
        if(e.target === frame) {
            frame.classList.remove('active');
        }
    });
});