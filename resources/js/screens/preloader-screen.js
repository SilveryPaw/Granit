const blockName = 'b-preloader-screen';
const pageName = 'b-page';

window.addEventListener('load', function() {
    const preloader = document.querySelector(`.${blockName}`);
    const screensContainer = document.querySelector(`.${pageName}__screens-container`);
    preloader.classList.add('hiding');
    screensContainer.style.setProperty('display', '');

    setTimeout(() => {
        preloader.classList.add('hide');
        preloader.classList.remove('hiding');
        this.document.body.classList.remove('no-scroll');
    }, 400)
});