import ScrollAnimation from "../Components/ScrollAnimation";
import Screen from "../Components/Screen";

const headerClass = 'b-header'

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
                    }
                }
            ),
            new Screen(
                `${selectorPart}third`,
                {
                    enterAnimClass: 'in-fade-under',
                    leaveAnimClass: 'out-scale-under',
                    leaveBackAnimClass: 'out-scale-under',
                    saveChildrenClassTillAnim: true
                }
            ),
            new Screen(
                `${selectorPart}fourth`,
            ),
            new Screen(
                `${selectorPart}fifth`,
                {
                    delayTime: 4400,
                    leaveBackAnimClass: 'out-half-leave',
                    saveChildrenClassPermanent: true
                }
            ),
            new Screen(
                `${selectorPart}sixth`,
                {
                    leaveClass: 'leave-half',
                    leaveBackAnimClass: 'out-no-leave',
                }
            ),
            new Screen(
                `${selectorPart}white`,
                {
                    enterClass: 'enter-polygon-bottom',
                    enterAnimClass: 'in-polygon-bottom',
                    leaveBackAnimClass: 'out-fade',
                    leaveAnimClass: 'out-fade',
                    transitionTime: 1500,
                    animClassesDelay: 100
                }
            ),
            new Screen(
                `${selectorPart}seventh`,
                {
                    enterAnimClass: 'in-fade-under',
                    leaveAnimClass: 'out-fade',
                    leaveBackAnimClass: 'out-content-anim-only',
                    saveChildrenClassTillAnim: true,
                    transitionTime: 1500
                }
            ),
            new Screen(
                `${selectorPart}eighth`,
                {
                    leaveBackAnimClass: 'out-no-leave',
                    saveChildrenClassTillAnim: true,
                    transitionTime: 1500,
                    nextAnimTime: 4000
                }
            ),
            new Screen(
                `${selectorPart}ninth`,
                {
                    enterClass: 'enter-polygon-center',
                    enterAnimClass: 'in-polygon-center',
                    leaveBackClass: 'leave-polygon-center',
                    leaveBackAnimClass: 'out-polygon-center',
                    leaveClass: 'leave-polygon-center',
                    leaveAnimClass: 'out-polygon-center',
                    enterChildClass: 'enter',
                    leaveChildClass: 'leave',
                    leaveBackChildClass: 'leave',
                    transitionTime: 4000,
                    animClassesDelay: 100
                }
            ),
            new Screen(
                `${selectorPart}tenth`,
                {
                    leaveAnimClass: 'out-fade',
                }
            ),
            new Screen(
                `${selectorPart}eleventh`,
                {
                    preventSelectors: '.b-eleventh-screen__controls-container'
                }
            ),
            new Screen(
                `${selectorPart}twelfth`,
                {
                    preventSelectors: '.b-eleventh-screen__controls-container'
                }
            ),
            new Screen(
                `${selectorPart}thirteenth`,
                {
                    preventSelectors: '.b-eleventh-screen__controls-container'
                }
            ),
            new Screen(
                `${selectorPart}fourteenth`,
                {
                    preventSelectors: '.b-eleventh-screen__controls-container',
                    leaveBackAnimClass: 'out-hide',
                    nextAnimTime: 3000
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