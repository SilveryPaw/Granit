export default class ScrollAnimation
{
    #screens;

    constructor(screens, options = {})
    {
        this.#screens = screens;
        this.activeScreen = 0;
        this.nextScreen = 1;
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
		// document.addEventListener('keyup', this.keyUpFunction.bind(this));
		document.addEventListener('wheel', this.scrollFunction.bind(this));
		if(this.container) {
            this.container.addEventListener('click', this.clickFunction.bind(this));
        }
        this.swipeEvent();
		this.updateScreens();
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
        let delay;
        if(curScreen.firstTimeDelay !== false) {
            delay = curScreen.firstTimeDelay;
            curScreen.firstTimeDelay = false;
        } else {
            delay = curScreen.delayTime;
        }

        if(
            curScreen.stagesActive
            &&
            (
                (next && !curScreen.stagesAtEnd)
                ||
                (!next && !curScreen.stagesAtStart)
            )
        ) {
            if(next === true) {
                curScreen.nextStage();
            } else {
                curScreen.prevStage();
            }

            this.isAnimating = true;

            setTimeout(() => {
                this.isAnimating = false;
            }, delay);

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

    updateScreens() {
        const curScreen = this.#screens[this.activeScreen];
        let delay;
        if(curScreen.firstTimeDelay !== false) {
            delay = curScreen.firstTimeDelay;
            curScreen.firstTimeDelay = false;
        } else {
            delay = curScreen.delayTime;
        }

		this.isAnimating = true;
		setTimeout(() => {
			this.isAnimating = false;
		}, delay);

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
                screen.clearClasses();
                screen.hideTop();
            }
		});
	}
}