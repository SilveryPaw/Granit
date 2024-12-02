export default class ScrollAnimation
{
    #screens;

    constructor(screens, options = {})
    {
        this.#screens = screens;
        this.prevScreen = 0;
        this.activeScreen = 1;
        this.nextScreen = 2;
		this.lastScreenIndex = screens.length - 1;
		this.isAnimating = false;
		this.prevClass = options.prevClass ?? 'prev';
        this.currentClass = options.currentClass ?? 'current';
		this.nextClass = options.nextClass ?? 'next';
        this.header = document.querySelector('.b-header');
        this.button = document.querySelector('.b-buy-button');
        if(options.container) {
            this.container = document.querySelector(`.${options.container}`);
        }

        this.init();
    }

    init() {
        window.addEventListener('scroll', this.scrollEvent.bind(this));
        this.scrollEvent();
		this.updateScreens();
    }

    scrollEvent(e) {
        const curScreen = this.#screens[this.activeScreen];
        const prevScreen = this.#screens[this.prevScreen];
        const nextScreen = this.#screens[this.nextScreen];
        let scroll = document.documentElement.scrollTop;
        let curScroll = scroll - prevScreen.delayPx - prevScreen.offsetTop;

        if(scroll > prevScreen.offsetTop + prevScreen.scrollHeight) {
            this.changeScreen(true);
        } else if(scroll < prevScreen.offsetTop + prevScreen.delayPx) {
            if(curScreen.key === 'sixteenth') {
                let prevSlide = this.#screens[this.prevScreen];
                
                prevSlide.container.style.setProperty('--scale', 50);

                setTimeout(() => {
                    prevSlide.container.style.removeProperty('--scale');
                }, 100);
            }
            this.changeScreen(false);
        } else {
            let percents = curScroll / prevScreen.realHeight;

            if(percents < 0) {
                percents = 1;
            }
            if(curScreen.container.classList.contains('in-delay')) {
                curScreen.container.classList.remove('in-delay');
                curScreen.child.classList.remove('in-delay')

                let perc = curScreen.container.style.getPropertyValue('--delay-percent');

                if((perc > 0) && (perc < 0.5)) {
                    curScreen.container.style.setProperty('--delay-percent', 0);
                } else if((perc > 0.5) && (perc < 1)) {
                    curScreen.container.style.setProperty('--delay-percent', 1);
                }

                this.#screens[this.nextScreen].container.classList.remove('visible');
                this.#screens[this.nextScreen].hide();
            }
            if(curScreen.hideButton) {
                this.button.classList.add('with-perc');
                this.button.style.setProperty('--perc', 1 - percents * 3);
            } else if(curScreen.showButton) {
                this.button.classList.add('with-perc');
                this.button.style.setProperty('--perc', percents * 2);
            } else {
                this.button.classList.remove('with-perc');
            }
            prevScreen.setPercents(percents);
            curScreen.setPercents(percents);
        }
    }

    swipeEvent() {
        this.xDown = null;
        this.yDown = null;
        this.container.addEventListener('touchstart', this.touchStart.bind(this), false);
        this.container.addEventListener('touchmove', this.touchMove.bind(this), false);
    }

    touchStart(e) {
        const { clientX, clientY } = e.touches[0];
        this.xDown = clientX;
        this.yDown = clientY;
    }

    touchMove(e) {
        if(!this.xDown || !this.yDown) {
            return;
        }

        const { clientX, clientY } = e.touches[0];

        const xDiff = this.xDown - clientX;
        const yDiff = this.yDown - clientY;

        this.xDown = null;
        this.yDown = null;

        if(Math.abs(xDiff) > Math.abs(yDiff)) {
            return;
        }

        if(yDiff > 0) {
            this.changeScreen(true);
        } else {
            this.changeScreen(false);
        }
    }

    keyUpFunction(event) {
		if(event.key == 'ArrowUp') {
			this.changeScreen(false)
		} else if(event.key == 'ArrowDown') {
			this.changeScreen(true);
		}
	}

	scrollFunction(event) {
		if(event.deltaY < 0) {
			this.changeScreen(false);
		} else {
			this.changeScreen(true);
		}
	}

    clickFunction(event) {
        const activeScreen = this.#screens[this.activeScreen];
        if(activeScreen.enabledPrevents && activeScreen.isPrevent(event.target)) return;

        this.changeScreen(true);
    }

    toScreen(index) {
        this.isAnimating = true;
        let found = false;

        this.#screens.forEach((screen, id) => {
            screen.clearClasses();

            if(Math.abs(id - index) > 2) {
                if(id > index) {
                    screen.hide();
                    screen.setPercents(0);
                } else {
                    screen.hideTop();
                    screen.setPercents(1);
                    screen.leaveBack();
                }
            } else {
                screen.show();
                screen.removeHideTop();
            }
            screen.container.classList.add('no-anim');
            setTimeout(function() {
                screen.container.classList.remove('no-anim');
            }, 500);
            if(screen.container.dataset.index == index) {
                this.prevScreen = id - 1;
                this.activeScreen = id;
                this.nextScreen = id + 1;

                screen.tempScreen.scrollIntoView();
                
                if(this.prevScreen > 0) {
                    this.#screens[this.prevScreen - 1].hideTop();
                }
            } else if(!found) {
                screen.hideTop();
                screen.leaveBack();
                screen.setPercents(1)
            } else {
                screen.hide();
                screen.leave();
                screen.setPercents(0);
            }
        });

        this.updateScreens();
    }

    changeScreen(next = true) {
        const curScreen = this.#screens[this.activeScreen];
        const prevScreen = this.#screens[this.prevScreen];
        const nextScreen = this.#screens[this.nextScreen];

        if(
            curScreen.delayPx > 0
            &&
            this.inDelay()
        ) {
            let scroll = document.documentElement.scrollTop;
            let curScroll = scroll - curScreen.offsetTop;
            let delayPerc = curScroll / curScreen.delayPx;

            if(prevScreen.container.style.getPropertyValue('--perc') != 1) {
                prevScreen.setPercents(1);
            }

            if(curScreen.container.style.getPropertyValue('--perc') != 1) {
                curScreen.setPercents(1);
            }
            curScreen.container.style.setProperty('--delay-percent', delayPerc);
            curScreen.container.classList.add('in-delay');
            curScreen.child.classList.add('in-delay');
            this.#screens[this.nextScreen].container.classList.add('visible');
            this.#screens[this.nextScreen].show();

            return;
        } else {
            curScreen.container.classList.remove('in-delay');
            curScreen.child.classList.remove('in-delay');
            let perc = curScreen.container.style.getPropertyValue('--delay-percent');

            if((perc > 0) && (perc < 0.5)) {
                curScreen.container.style.setProperty('--delay-percent', 0);
            } else if((perc > 0.5) && (perc < 1)) {
                curScreen.container.style.setProperty('--delay-percent', 1);
            }

            if(this.#screens[this.nextScreen]) {
                this.#screens[this.nextScreen].container.classList.remove('visible');
                this.#screens[this.nextScreen].hide();
            }
        }

        if(next === true) {
            if(prevScreen) {
                prevScreen.setPercents(1);                
            }
            curScreen.setDefaultLeaveBackPercents();
            nextScreen.setDefaultEnterPercents();
        } else {
            curScreen.setDefaultLeavePercents();
            prevScreen.setDefaultEnterReturnPercents();
            if(nextScreen) {
                nextScreen.setDefaultLeavePercents();
            }
        }

		if(next && (this.activeScreen + 1 <= this.lastScreenIndex)) {
            this.prevScreen = this.activeScreen;
            this.activeScreen = this.activeScreen + 1;
            this.nextScreen = this.activeScreen + 1;
		} else if(!next && (this.activeScreen - 1 >= 0)) {
			this.nextScreen = this.activeScreen;
            this.activeScreen = this.activeScreen - 1;
            this.prevScreen = this.activeScreen - 1;
		} else {
            return;
        }
		this.updateScreens();
	}

    inDelay() {
        let scroll = document.documentElement.scrollTop;
        let curScreen = this.#screens[this.activeScreen];
        let curScroll = scroll - curScreen.offsetTop; 

        return (curScroll > 0) && (curScroll < curScreen.delayPx);
    }

    updateScreens() {
        const curScreen = this.#screens[this.activeScreen];

		this.#screens.forEach((screen, index) => {
			if(index === this.prevScreen) {
                screen.leaveBack();
            } else if(index === this.activeScreen) {
                screen.enter();
            } else if(index === this.nextScreen) {
                screen.leave();
            } else if (index < this.activeScreen - curScreen.beforeSlides) {
                screen.noAnim();
                screen.hideTop();
            } else if (index > this.activeScreen) {
                screen.noAnim();
                screen.hide();
            } else {
                screen.removeHideTop();
            }
		});
	}
}