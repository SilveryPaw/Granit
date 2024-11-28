export default class Screen
{
    #blockName = 'b-page';
    #screen;
    #childContainer;
    #enterClass = 'enter';
    #enterChildClass = 'enter';
    #leaveClass = 'leave';
    #leaveChildClass = 'leave';
    #leaveBackClass = 'leave-back';
    #leaveBackChildClass = 'leave-back';
    #enterAnimClass = 'in-slide';
    #leaveAnimClass = 'out-slide';
    #leaveBackAnimClass = 'out-slide-back';
    #stages = {};
    #stagesBlocks;
    #currentStage;
    #stagesAtStart = false;
    #stagesAtEnd = false;
    #stagesActive = false;
    #saveChildrenClassTillAnim = false;
    #saveChildrenClassTillAnimBack = false;
    #saveChildrenClassTillAnimForward = false;
    #saveChildrenClassPermanent = false;
    #enablePrevents = false;
    #permanentClass;
    #prevents = [];
    #leaveBackTimeout;
    #leaveTimeout;
    #enterTimeout;
    #tempScreen;
    #screenIndex;
    #screenHeight;
    #screenHeightDesk;
    #delayPx = 0;
    #delayPxDesk = 0;
    #defaultEnterPercents = 0;
    #defaultEnterReturnPercents = 1;
    #defaultLeaveBackPercents = 0;
    #defaultLeavePercents = 0;
    #hideBuyButton = false;
    #showBuyButton = false;
    #minDeskWitdh = 1280;

    constructor(screenSelector, options = {})
    {
        this.#screen = document.querySelector(`${screenSelector}`);
        this.#screenIndex = this.#screen.dataset.index;
        this.transitionTime = options.transitionTime ?? 1000;
        this.transitionTimeLeaveBack = options.transitionTimeLeaveBack ?? this.transitionTime;
        this.delayTime = options.delayTime ?? this.transitionTime;
        this.firstTimeDelay = options.firstTimeDelay ?? false;
        this.nextAnimTime = options.nextAnimTime ?? this.transitionTime;
        this.animClassesDelay = options.animClassesDelay ?? 0;
        
        this.isActive = false;
        this.#childContainer = this.#screen.firstElementChild;
        this.#childContainer.setAttribute('data-content', '');
        this.#screen.style.setProperty('--anim-delay', this.transitionTime + 'ms')
        this.#screen.style.setProperty('--next-anim-delay', this.nextAnimTime + 'ms')
        this.#screenHeight = options.screenHeight ?? window.innerHeight;
        this.#screenHeightDesk = options.screenHeightDesk ?? null;
        this.#defaultEnterPercents = options.defaultEnterPercents ?? this.#defaultEnterPercents;
        this.#defaultEnterReturnPercents = options.defaultEnterReturnPercents ?? this.#defaultEnterReturnPercents;
        this.#defaultLeaveBackPercents = options.defaultLeaveBackPercents ?? this.#defaultLeaveBackPercents;
        this.#defaultLeavePercents = options.defaultLeavePercents ?? this.#defaultLeavePercents;

        if(options.permanentClass) {
            this.#permanentClass = options.permanentClass;
            this.#screen.classList.add(options.permanentClass);
        }

        if(options.leaveClass) {
            this.#leaveClass = options.leaveClass;
        }

        if(options.enterClass) {
            this.#enterClass = options.enterClass;
        }

        if(options.leaveBackClass) {
            this.#leaveBackClass = options.leaveBackClass;
        }

        if(options.enterAnimClass) {
            this.#enterAnimClass = options.enterAnimClass;
        }

        if(options.leaveAnimClass) {
            this.#leaveAnimClass = options.leaveAnimClass;
        }
        
        if(options.leaveBackAnimClass) {
            this.#leaveBackAnimClass = options.leaveBackAnimClass;
        }

        if(options.saveChildrenClassTillAnimBack) {
            this.#saveChildrenClassTillAnimBack = options.saveChildrenClassTillAnimBack;
        }

        if(options.saveChildrenClassTillAnimForward) {
            this.#saveChildrenClassTillAnimForward = options.saveChildrenClassTillAnimForward;
        }

        if(options.saveChildrenClassTillAnim) {
            this.#saveChildrenClassTillAnim = options.saveChildrenClassTillAnim;
        }

        if(options.saveChildrenClassPermanent) {
            this.#saveChildrenClassPermanent = options.saveChildrenClassPermanent;
        }

        if(options.enterChildClass) {
            this.#enterChildClass = options.enterChildClass;
        }

        if(options.leaveChildClass) {
            this.#leaveChildClass = options.leaveChildClass;
        }

        if(options.leaveBackChildClass) {
            this.#leaveBackChildClass = options.leaveBackChildClass;
        }

        if(options.stages) {
            this.#stages = options.stages;
            this.#stagesBlocks = document.querySelectorAll(options.stages.selector);
            this.setStages();
        }

        if(options.propertyEnter) {
            this.propertyEnter = options.propertyEnter;
        }

        if(options.preventSelectors) {
            this.#enablePrevents = true;
            this.preventSelectors = options.preventSelectors;
            this.setPrevents();
        }

        if(options.delayPx) {
            this.#delayPx = options.delayPx;
        }

        if(options.delayPxDesk) {
            this.#delayPxDesk = options.delayPxDesk;
        }

        if(options.hideButton) {
            this.#hideBuyButton = options.hideButton;
        }

        if(options.showButton) {
            this.#showBuyButton = options.showButton;
        }


        this.#tempScreen = document.querySelector(`.${this.#blockName}__temp-screen[data-index="${this.#screenIndex}"]`);

        if(window.innerWidth > this.#minDeskWitdh && this.#screenHeightDesk !== null) {
            this.#tempScreen.style.setProperty('height', this.#screenHeightDesk + 'px');
        } else {
            this.#tempScreen.style.setProperty('height', this.#screenHeight + 'px');
        }
    }

    get key() {
        return this.container.dataset.index;
    }

    get delayPx() {
        if(window.innerWidth > this.#minDeskWitdh && this.#delayPxDesk != 0) {
            return this.#delayPxDesk;
        }
        return this.#delayPx;
    }

    get container()
    {
        return this.#screen;
    }

    get stagesActive()
    {
        return this.#stagesActive;
    }

    get stagesAtEnd()
    {
        return this.#stagesAtEnd;
    }

    get stagesAtStart()
    {
        return this.#stagesAtStart;
    }

    get child()
    {
        return this.#childContainer;
    }

    get leaveClass()
    {
        return this.#leaveClass;
    }

    get enabledPrevents()
    {
        return this.#enablePrevents;
    }

    get tempScreen() {
        return this.#tempScreen;
    }

    get scrollHeight() {
        return this.#tempScreen.getBoundingClientRect().height;
    }

    get realHeight() {
        if(window.innerWidth >= this.#minDeskWitdh && this.#delayPxDesk != 0) {
            return this.scrollHeight - this.#delayPxDesk;
        }
        return this.scrollHeight - this.#delayPx;
    }

    get offsetTop() {
        return this.#tempScreen.offsetTop;
    }

    get hideButton() {
        return this.#hideBuyButton;
    }

    get showButton() {
        return this.#showBuyButton;
    }

    setPrevents() {
        switch(typeof this.preventSelectors) {
            case 'object':
                this.preventSelectors.forEach(selector => {
                    this.#prevents.push(this.#screen.querySelector(selector));
                });
                break;
            case 'string':
                this.#prevents.push(this.#screen.querySelector(this.preventSelectors));
                break;
        }
    }

    isPrevent(elem) {
        let isPrevent = false;
        this.#prevents.forEach(prevent => {
            if(isPrevent === true) return isPrevent;
            if(elem == prevent || prevent.contains(elem)) {
                isPrevent = true;
            }
        });

        return isPrevent;
    }

    setStages()
    {
        this.#currentStage = -1;
        this.#stagesActive = true;
    }

    prevStage()
    {
        this.#stagesAtEnd = false;
        if(this.#currentStage <= this.#stages.count - 1) {
            this.#stagesBlocks[this.#currentStage].classList.remove(this.#stages.activeClass ?? 'enter');
        }

        this.#currentStage -= 1;
        if(this.#currentStage >= 0) {
            this.#stagesBlocks[this.#currentStage].classList.add(this.#stages.activeClass ?? 'enter');
            this.#stagesBlocks[this.#currentStage].classList.remove(this.#stages.inactiveClass ?? 'leave');
        }

        if(this.#currentStage < 0) {
            this.#stagesAtStart = true;
        }
    }

    nextStage()
    {
        
        if(this.#currentStage > this.#stages.count - 1) {
            this.#stagesAtEnd = true;
        }

        this.#stagesAtStart = false;
        if(this.#currentStage >= 0) {
            this.#stagesBlocks[this.#currentStage].classList.remove(this.#stages.activeClass ?? 'enter');
            this.#stagesBlocks[this.#currentStage].classList.add(this.#stages.inactiveClass ?? 'leave');
        }

        this.#currentStage += 1;
        this.#stagesBlocks[this.#currentStage].classList.add(this.#stages.activeClass ?? 'enter');
        this.#stagesBlocks[this.#currentStage].classList.remove(this.#stages.inactiveClass ?? 'leave');
    }

    setAnimClasses()
    {
        this.#screen.classList.add(this.#enterAnimClass);
        this.#screen.classList.add(this.#leaveAnimClass);
        this.#screen.classList.add(this.#leaveBackAnimClass);
    }

    enter()
    {
        this.#screen.style.setProperty('--anim-delay', this.transitionTime + 'ms');

        this.#screen.classList.add(this.#enterClass);
        if(this.#enterClass != this.#leaveClass) {
            this.#screen.classList.remove(this.#leaveClass);
        }
        if(this.#enterClass != this.#leaveBackClass) {
            this.#screen.classList.remove(this.#leaveBackClass);
        }

        this.show();

        if(this.#leaveTimeout) {
            window.clearTimeout(this.#leaveTimeout);
        }
        if(this.#leaveBackTimeout) {
            window.clearTimeout(this.#leaveBackTimeout);
        }

        window.clearTimeout()

        if(this.propertyEnter) {
            this.#screen.style.setProperty(this.propertyEnter.name, this.propertyEnter.value)
        }

        if(this.#saveChildrenClassTillAnim) {
            this.#enterTimeout = setTimeout(() => {
                this.#childContainer.classList.add(this.#enterChildClass);
                this.#childContainer.classList.remove(this.#leaveChildClass);
                this.#childContainer.classList.remove(this.#leaveBackChildClass);
            }, this.transitionTime);
        } else {
            this.#childContainer.classList.add(this.#enterChildClass);
            this.#childContainer.classList.remove(this.#leaveChildClass);
            this.#childContainer.classList.remove(this.#leaveBackChildClass);
        }

        setTimeout(() => {
            this.#screen.classList.remove(this.#leaveAnimClass);
            this.#screen.classList.remove(this.#leaveBackAnimClass);
            this.#screen.classList.add(this.#enterAnimClass);
        }, this.animClassesDelay ?? 0);
    }

    leave()
    {
        this.#screen.classList.add(this.#leaveClass);

        if(this.#leaveClass != this.#enterClass) {
            this.#screen.classList.remove(this.#enterClass);
        }
        if(this.#leaveClass != this.#leaveBackClass) {
            this.#screen.classList.remove(this.#leaveBackClass);
        }

        if(this.#enterTimeout) {
            window.clearTimeout(this.#enterTimeout);
        }
        if(this.#leaveBackTimeout) {
            window.clearTimeout(this.#leaveBackTimeout);
        }

        if(this.#saveChildrenClassTillAnimForward) {
            this.#leaveTimeout = setTimeout(() => {
                this.#childContainer.classList.remove(this.#enterChildClass);
                this.#childContainer.classList.remove(this.#leaveBackChildClass);
                this.#childContainer.classList.add(this.#leaveChildClass);
            }, this.nextAnimTime ?? this.transitionTime);
        } else if(!this.#saveChildrenClassPermanent) {
            this.#childContainer.classList.remove(this.#enterChildClass);
            this.#childContainer.classList.add(this.#leaveChildClass);
            this.#childContainer.classList.remove(this.#leaveBackChildClass);
        }
        
        this.#screen.classList.add(this.#leaveAnimClass);

        if(this.#leaveAnimClass != this.#enterAnimClass) {
            this.#screen.classList.remove(this.#enterAnimClass);
        }
        if(this.#leaveAnimClass != this.#leaveBackAnimClass) {
            this.#screen.classList.remove(this.#leaveBackAnimClass);
        }
    }

    leaveBack()
    {
        this.#screen.style.setProperty('--anim-delay', this.transitionTimeLeaveBack + 'ms');
        this.#screen.classList.add(this.#leaveBackClass);

        if(this.#leaveBackClass != this.#enterClass) {
            this.#screen.classList.remove(this.#enterClass);
        }
        if(this.#leaveBackClass != this.#leaveClass) {
            this.#screen.classList.remove(this.#leaveClass);
        }

        this.show()
        this.removeHideTop();

        if(this.#enterTimeout) {
            window.clearTimeout(this.#enterTimeout);
        }
        if(this.#leaveTimeout) {
            window.clearTimeout(this.#leaveBackTimeout);
        }

        if(this.#saveChildrenClassTillAnimBack) {
            this.#leaveTimeout = setTimeout(() => {
                this.#childContainer.classList.remove(this.#enterChildClass);
                this.#childContainer.classList.remove(this.#leaveChildClass);
                this.#childContainer.classList.add(this.#leaveBackChildClass);
            }, this.nextAnimTime ?? this.transitionTime);
        } else if(!this.#saveChildrenClassPermanent) {
            this.#childContainer.classList.remove(this.#enterChildClass);
            this.#childContainer.classList.remove(this.#leaveChildClass);
            this.#childContainer.classList.add(this.#leaveBackChildClass);
        }

        this.#screen.classList.remove(this.#enterAnimClass);
        this.#screen.classList.remove(this.#leaveAnimClass);
        this.#screen.classList.add(this.#leaveBackAnimClass);
    }

    clearClasses()
    {
        this.#screen.classList.remove(this.#enterClass);
        this.#screen.classList.remove(this.#leaveClass);
        this.#screen.classList.remove(this.#leaveBackClass);

        if(!this.#saveChildrenClassPermanent) {
            this.#childContainer.classList.remove(this.#enterChildClass);
            this.#childContainer.classList.remove(this.#leaveChildClass);
            this.#childContainer.classList.remove(this.#leaveBackChildClass);
        }

        if(this.#enterTimeout) {
            window.clearTimeout(this.#enterTimeout);
        }
        if(this.#leaveTimeout) {
            window.clearTimeout(this.#leaveTimeout);
        }
        if(this.#leaveBackTimeout) {
            window.clearTimeout(this.#leaveBackTimeout);
        }

        this.#screen.classList.remove(this.#enterAnimClass);
        this.#screen.classList.remove(this.#leaveAnimClass);
        this.#screen.classList.remove(this.#leaveBackAnimClass);
    }

    setPercents(perc) {
        this.#screen.style.setProperty('--perc', perc);
    }

    setDelayPercents(perc) {
        this.#screen.style.setProperty('--delay-percent', perc)
    }

    setDefaultEnterPercents() {
        this.#screen.style.setProperty('--perc', this.#defaultEnterPercents);
    }

    setDefaultEnterReturnPercents() {
        this.#screen.style.setProperty('--perc', this.#defaultEnterReturnPercents);
    }

    setDefaultLeaveBackPercents() {
        this.#screen.style.setProperty('--perc', this.#defaultLeaveBackPercents);
    }

    setDefaultLeavePercents() {
        this.#screen.style.setProperty('--perc', this.#defaultLeavePercents);
    }

    clearPercents(perc) {
        this.#screen.style.removeProperty('--perc');
    }

    hideTop()
    {
        this.#screen.classList.add('hide-top');
    }

    removeHideTop()
    {
        this.#screen.classList.remove('hide-top');
    }

    hide() {
        this.#screen.classList.add('hide');
    }

    show() {
        this.#screen.classList.remove('hide');
    }

    noAnim()
    {
        this.#screen.classList.add('no-anim');
        setTimeout(() => {
            this.#screen.classList.remove('no-anim');
        }, 100);
    }
}