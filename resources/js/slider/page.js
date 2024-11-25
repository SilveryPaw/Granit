import ScrollAnimation from "../Components/ScrollAnimation";
import Screen from "../Components/Screen";

document.addEventListener('DOMContentLoaded', function() {
    const selectorPart = '.b-page__screen--';
    new ScrollAnimation(
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
                }
            ),
            new Screen(
                `${selectorPart}white`,
                {
                    enterClass: 'enter-polygon'
                }
            ),
            new Screen(
                `${selectorPart}seventh`,
            ),
            new Screen(
                `${selectorPart}eighth`,
            ),
            new Screen(
                `${selectorPart}ninth`,
            ),
            new Screen(
                `${selectorPart}tenth`,
            ),
            new Screen(
                `${selectorPart}eleventh`,
            ),
            new Screen(
                `${selectorPart}twelfth`,
            ),
            new Screen(
                `${selectorPart}thirteenth`,
            ),
            new Screen(
                `${selectorPart}fourteenth`,
            ),
            new Screen(
                `${selectorPart}fifteenth`,
            ),
            new Screen(
                `${selectorPart}sixteenth`,
            ),
            new Screen(
                `${selectorPart}final`,
            ),
        ]
    )
});