import ScrollAnimation from "../Components/ScrollAnimation";
import Screen from "../Components/Screen";

const headerClass = 'b-header'

window.history.scrollRestoration = 'manual';

document.addEventListener('DOMContentLoaded', function() {
    const selectorPart = '.b-page__screen--';
    const anim = new ScrollAnimation(
        [
            new Screen(
                `${selectorPart}first`,
            ),
            new Screen(
                `${selectorPart}second`,
                {
                    stages: {
                        count: 3,
                        selector: '.b-second-screen__value-container',
                        activeClass: 'enter',
                        inactiveClass: 'leave'
                    },
                    screenHeight: 2000,
                    defaultEnterPercents: 0,
                    defaultLeaveBackPercents: 0,
                    delayPx: 1000
                }
            ),
            new Screen(
                `${selectorPart}third`,
                {
                    enterAnimClass: 'in-fade-under',
                    leaveAnimClass: 'out-scale-under',
                    leaveBackAnimClass: 'out-scale-under',
                    screenHeight: 2000,
                    defaultEnterPercents: 0,
                    defaultLeaveBackPercents: 0,
                    delayPx: 500
                }
            ),
            new Screen(
                `${selectorPart}fourth`,
                {
                    screenHeight: 2000,
                    screenHeightDesk: 1500,
                    delayPx: 700,
                    defaultEnterPercents: 0,
                }
            ),
            new Screen(
                `${selectorPart}fifth`,
                {
                    firstTimeDelay: 4400,
                    screenHeight: 1500,
                    screenHeightDesk: 2000,
                    delayPx: 1000,
                    leaveBackAnimClass: 'out-half-leave',
                    defaultEnterPercents: 0,
                    defaultLeaveBackPercents: 0,
                    saveChildrenClassPermanent: true
                }
            ),
            new Screen(
                `${selectorPart}sixth`,
                {
                    leaveClass: 'leave-half',
                    enterAnimClass: 'in-half',
                    screenHeight: 800,
                    defaultEnterPercents: 0,
                    defaultLeaveBackPercents: 0,
                    screenHeightDesk: 1800,
                    delayPx: 300,
                    delayPxDesk: 1300,
                    leaveBackAnimClass: 'out-no-leave',
                }
            ),
            new Screen(
                `${selectorPart}buy`,
                {
                    leaveBackAnimClass: 'out-content-anim-only',
                    hideButton: true,
                    defaultEnterPercents: 0,
                    defaultLeaveBackPercents: 0,
                    delayPx: 300
                }
            ),
            new Screen(
                `${selectorPart}white`,
                {
                    enterClass: 'enter-polygon-bottom',
                    enterAnimClass: 'in-polygon-bottom',
                    leaveBackAnimClass: 'out-fade',
                    leaveAnimClass: 'no-anim',
                    showButton: true,
                    defaultEnterPercents: 0,
                    screenHeight: 100,
                    screenHeightDesk: 300,
                    delayPxDesk: 100
                }
            ),
            new Screen(
                `${selectorPart}seventh`,
                {
                    enterAnimClass: 'in-fade',
                    leaveAnimClass: 'out-fade',
                    leaveBackAnimClass: 'out-content-anim-only',
                    screenHeight: 2000,
                    screenHeightDesk: 2500,
                    delayPx: 1500
                }
            ),
            new Screen(
                `${selectorPart}eighth`,
                {
                    leaveBackAnimClass: 'out-no-leave',
                    defaultEnterPercents: 1,
                    screenHeight: 2500,
                    delayPx: 1500
                }
            ),
            new Screen(
                `${selectorPart}ninth`,
                {
                    enterClass: 'enter-polygon-center',
                    enterAnimClass: 'in-polygon-center',
                    leaveBackClass: 'leave-polygon-center',
                    leaveBackAnimClass: 'out-polygon-back-center',
                    leaveClass: 'leave-polygon-center',
                    leaveAnimClass: 'out-polygon-center',
                    enterChildClass: 'enter',
                    leaveChildClass: 'leave',
                    leaveBackChildClass: 'leave',
                    defaultEnterPercents: 0,
                    screenHeight: 1000,
                    delayPx: 500,
                    screenHeightDesk: 1500,
                    delayPxDesk: 1000,
                    animClassesDelay: 100
                }
            ),
            new Screen(
                `${selectorPart}tenth`,
                {
                    leaveAnimClass: 'out-fade',
                    enterClass: 'in-fade-under',
                    enterAnimClass: 'no-anim',
                }
            ),
            new Screen(
                `${selectorPart}eleventh`,
                {
                    preventSelectors: '.b-eleventh-screen__controls-container',
                    screenHeightDesk: 1500,
                    delayPxDesk: 500,
                }
            ),
            new Screen(
                `${selectorPart}twelfth`,
                {
                    preventSelectors: '.b-eleventh-screen__controls-container',
                    screenHeightDesk: 1500,
                    delayPxDesk: 500,
                }
            ),
            new Screen(
                `${selectorPart}thirteenth`,
                {
                    preventSelectors: '.b-eleventh-screen__controls-container',
                    screenHeightDesk: 1500,
                    delayPxDesk: 500,
                }
            ),
            new Screen(
                `${selectorPart}fourteenth`,
                {
                    preventSelectors: '.b-eleventh-screen__controls-container',
                    screenHeightDesk: 1500,
                    delayPxDesk: 500,
                    leaveBackAnimClass: 'out-no-leave'
                }
            ),
            new Screen(
                `${selectorPart}fifteenth`,
                {
                    enterClass: 'enter-polygon-center',
                    enterAnimClass: 'in-polygon-center',
                    leaveClass: 'leave-polygon-center',
                    leaveAnimClass: 'out-polygon-center',
                    enterChildClass: 'enter',
                    leaveChildClass: 'leave',
                    leaveBackChildClass: 'leave',
                    transitionTime: 3000,
                    transitionTimeLeaveBack: 1000,
                    animClassesDelay: 100,
                    saveChildrenClassPermanent: true
                }
            ),
            new Screen(
                `${selectorPart}sixteenth`,
            ),
            new Screen(
                `${selectorPart}final`,
                {
                    delayPx: 300
                }
            ),
        ],
        {
            container: 'b-page__screens-container'
        }
    )

    const header = document.querySelector(`.${headerClass}`);
    const burgerButton = header.querySelector(`.${headerClass}__burger-button`);
    const burgerMenu = header.querySelector(`.${headerClass}__burger-menu`);

    burgerButton.addEventListener('click', function() {
        burgerButton.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    burgerMenu.querySelectorAll(`.${headerClass}__burger-item`).forEach(item => {
        item.addEventListener('click', function() {
            anim.toScreen(item.dataset.index);
            burgerButton.classList.remove('active');
            burgerMenu.classList.remove('active');
        });
    });
});