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
        if(options.container) {
            this.container = document.querySelector(`.${options.container}`);
        }

        this.init();
    }

    init() {
		// document.addEventListener('wheel', this.scrollFunction.bind(this));
		// if(this.container) {
        //     this.container.addEventListener('click', this.clickFunction.bind(this));
        // }
        window.addEventListener('scroll', this.scrollEvent.bind(this));
        this.scrollEvent();
        // this.swipeEvent();
		this.updateScreens();
    }

    scrollEvent(e) {
        const curScreen = this.#screens[this.activeScreen];
        const prevScreen = this.#screens[this.prevScreen];
        let scroll = document.documentElement.scrollTop;
        let curScroll = scroll - prevScreen.delayPx - prevScreen.offsetTop; 

        if(scroll > prevScreen.offsetTop + prevScreen.scrollHeight) {
            prevScreen.setPercents(1);
            console.log(scroll)
            console.log(prevScreen.offsetTop);
            console.log(prevScreen.delayPx)
            console.log(prevScreen.offsetTop + prevScreen.scrollHeight);
            console.log(curScroll);
            console.log(curScroll / prevScreen.realHeight);
            console.log(curScreen.offsetTop + curScreen.delayPx);
            console.log('____________')
            console.log('setting to zero')

            if(scroll == curScreen.offsetTop + curScreen.delayPx) {
                curScreen.noAnim();
                curScreen.setPercents(0)
            } else {
                curScreen.setPercents(1);
            }
            this.changeScreen(true);
        } else if(scroll < prevScreen.offsetTop + prevScreen.delayPx) {
            curScreen.setPercents(0);
            if(curScroll >= 0) {
                prevScreen.setPercents(0);
            } else {
                prevScreen.setPercents(1);
            }
            this.changeScreen(false);
        } else {
            let percents = curScroll / prevScreen.realHeight;
            if(percents < 0) {
                percents = 1;
            }
            prevScreen.setPercents(percents);
            curScreen.setPercents(percents);
        }
    }

    getCurrentScreen() {
        let scroll = document.documentElement.scrollTop;
        let curScreen = scroll / this.#screens.length;
        let curScroll = scroll % this.#screens.length;
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

        this.#screens.forEach((screen, id) => {
            screen.clearClasses();
            screen.container.classList.add('no-anim');
            setTimeout(function() {
                screen.container.classList.remove('no-anim');
            }, 500);
            if(screen.container.dataset.index == index) {
                this.prevScreen = id - 1;
                this.activeScreen = id;
                this.nextScreen = id + 1;
                
                if(this.prevScreen > 0) {
                    this.#screens[this.prevScreen - 1].hideTop();
                }
            }
        });

        setTimeout(function() {
            this.isAnimating = false;
        }, 500)

        this.updateScreens();
    }

    changeScreen(next = true) {
		if(this.isAnimating === true) return;
        const curScreen = this.#screens[this.activeScreen];
        // let delay;
        // if(curScreen.firstTimeDelay !== false) {
        //     delay = curScreen.firstTimeDelay;
        //     curScreen.firstTimeDelay = false;
        // } else {
        //     delay = curScreen.delayTime;
        // }

        if(
            curScreen.delayPx > 0
            &&
            this.inDelay()
        ) {
            console.log('here')
            let scroll = document.documentElement.scrollTop;
            let curScroll = scroll - curScreen.offsetTop;
            let delayPerc = curScroll / curScreen.delayPx;

            curScreen.container.style.setProperty('--delay-percent', delayPerc)
            // if(next === true) {
                
            //     curScreen.nextStage();
            // } else {
            //     curScreen.prevStage();
            // }

            // this.isAnimating = true;

            // setTimeout(() => {
            //     this.isAnimating = false;
            // }, delay);

            return;
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
        // let delay;
        // if(curScreen.firstTimeDelay !== false) {
        //     delay = curScreen.firstTimeDelay;
        //     curScreen.firstTimeDelay = false;
        // } else {
        //     delay = curScreen.delayTime;
        // }

		// this.isAnimating = true;
		// setTimeout(() => {
		// 	this.isAnimating = false;
		// }, delay);

        if(this.activeScreen > 0) {
            this.header.classList.add('hide-mobile');
        } else {
            this.header.classList.remove('hide-mobile');
        }

		this.#screens.forEach((screen, index) => {
			if(index === this.prevScreen) {
                screen.leaveBack();
            } else if(index === this.activeScreen) {
                screen.enter();
            } else if(index === this.nextScreen) {
                screen.leave();
            } else if (index < this.activeScreen - 2) {
                // screen.clearClasses();
                // screen.hideTop();
            }
		});
	}
}