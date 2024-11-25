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

        this.init();
    }

    init() {
		document.addEventListener('keyup', this.keyUpFunction.bind(this));
		document.addEventListener('wheel', this.scrollFunction.bind(this));
		document.addEventListener('click', this.clickFunction.bind(this));
		this.updateScreens();
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

    clickFunction() {
        this.changeScreen(true);
    }

    changeScreen(next = true) {
		if(this.isAnimating === true) return;
        const curScreen = this.#screens[this.activeScreen];

        if(curScreen.stagesActive) {
            curScreen.nextStage();

            this.isAnimating = true;

            setTimeout(() => {
                this.isAnimating = false;
            }, curScreen.delayTime);

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
		this.isAnimating = true;
		setTimeout(() => {
			this.isAnimating = false;
		}, this.#screens[this.activeScreen].delayTime);

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
            }
		});
	}
}