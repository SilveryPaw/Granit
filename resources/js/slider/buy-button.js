const className = 'b-buy-button';
const pageClass = 'b-page';
const screenClass = 'b-buy-screen';

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector(`.${className}`);
    const frame = document.querySelector(`.${pageClass}__buy-frame`);
    const buttons = document.querySelectorAll(`.${screenClass}__buy`);

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            frame.classList.toggle('active');
        });
    });

    button.addEventListener('click', function() {
        frame.classList.toggle('active');
    });

    frame.addEventListener('click', function(e) {
        if(e.target === frame) {
            frame.classList.remove('active');
        }
    });
});