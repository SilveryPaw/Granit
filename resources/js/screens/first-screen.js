const blockName = 'b-first-screen';
const minDeskWidth = 1280;

document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.querySelector(`.${blockName}__video`);
    const videoSource = videoPlayer.querySelector('source');

    changeSource();

    window.addEventListener('resize', changeSource);

    function changeSource() {
        if(window.innerWidth >= minDeskWidth && !videoSource.src.includes(videoPlayer.dataset.srcDesk)) {
            videoSource.src = videoPlayer.dataset.srcDesk;
            videoPlayer.load();
        } else if(window.innerWidth < minDeskWidth && !videoSource.src.includes(videoPlayer.dataset.srcMobile)) {
            videoSource.src = videoPlayer.dataset.srcMobile;
            videoPlayer.load();
        }
    }    
});