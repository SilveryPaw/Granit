export default class Screen
{
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
    #stagesActive = false;
    #saveChildrenClassTillAnim = false;
    #saveChildrenClassPermanent = false;
    #enablePrevents = false;
    #prevents = [];


    constructor(screenSelector, options = {})
    {
        this.#screen = document.querySelector(`${screenSelector}`);
        this.transitionTime = options.transitionTime ?? 1000;
        this.transitionTimeLeaveBack = options.transitionTimeLeaveBack ?? this.transitionTime;
        this.delayTime = options.delayTime ?? this.transitionTime;
        this.nextAnimTime = options.nextAnimTime ?? this.transitionTime;
        this.animClassesDelay = options.animClassesDelay ?? 0;
        
        this.isActive = false;
        this.#childContainer = this.#screen.firstElementChild;
        this.#childContainer.setAttribute('data-content', '');
        this.#screen.style.setProperty('--anim-delay', this.transitionTime + 'ms')
        this.#screen.style.setProperty('--next-anim-delay', this.nextAnimTime + 'ms')

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
    }

    get container()
    {
        return this.#screen;
    }

    get stagesActive()
    {
        return this.#stagesActive;
    }

    get enabledPrevents()
    {
        return this.#enablePrevents;
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

    nextStage()
    {
        if(this.#currentStage >= 0) {
            this.#stagesBlocks[this.#currentStage].classList.remove(this.#stages.activeClass ?? 'enter');
            this.#stagesBlocks[this.#currentStage].classList.add(this.#stages.inactiveClass ?? 'leave');
        }

        this.#currentStage += 1;
        this.#stagesBlocks[this.#currentStage].classList.add(this.#stages.activeClass ?? 'enter');
        this.#stagesBlocks[this.#currentStage].classList.remove(this.#stages.inactiveClass ?? 'leave');

        if(this.#currentStage >= this.#stages.count - 1) {
            this.#stagesActive = false;
        }
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
        this.#screen.classList.remove(this.#leaveClass);
        this.#screen.classList.remove(this.#leaveBackClass);

        if(this.propertyEnter) {
            this.#screen.style.setProperty(this.propertyEnter.name, this.propertyEnter.value)
        }

        if(this.#saveChildrenClassTillAnim) {
            setTimeout(() => {
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
            this.#screen.classList.add(this.#enterAnimClass);
            this.#screen.classList.remove(this.#leaveAnimClass);
            this.#screen.classList.remove(this.#leaveBackAnimClass);
        }, this.animClassesDelay ?? 0);
    }

    leave()
    {
        this.#screen.classList.remove(this.#enterClass);
        this.#screen.classList.add(this.#leaveClass);
        this.#screen.classList.remove(this.#leaveBackClass);

        if(this.#saveChildrenClassTillAnim) {
            setTimeout(() => {
                this.#childContainer.classList.remove(this.#enterChildClass);
                this.#childContainer.classList.add(this.#leaveChildClass);
                this.#childContainer.classList.remove(this.#leaveBackChildClass);
            }, 0);
        } else if(!this.#saveChildrenClassPermanent) {
            this.#childContainer.classList.remove(this.#enterChildClass);
            this.#childContainer.classList.add(this.#leaveChildClass);
            this.#childContainer.classList.remove(this.#leaveBackChildClass);
        }

        this.#screen.classList.remove(this.#enterAnimClass);
        this.#screen.classList.add(this.#leaveAnimClass);
        this.#screen.classList.remove(this.#leaveBackAnimClass);
    }

    leaveBack()
    {
        this.#screen.style.setProperty('--anim-delay', this.transitionTimeLeaveBack + 'ms');
        this.#screen.classList.remove(this.#enterClass);
        this.#screen.classList.remove(this.#leaveClass);
        this.#screen.classList.add(this.#leaveBackClass);

        if(this.#saveChildrenClassTillAnim) {
            setTimeout(() => {
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
        this.#childContainer.classList.remove(this.#enterChildClass);
        this.#screen.classList.remove(this.#leaveClass);
        this.#childContainer.classList.remove(this.#leaveChildClass);
        this.#screen.classList.remove(this.#leaveBackClass);
        this.#childContainer.classList.remove(this.#leaveBackChildClass);

        this.#screen.classList.remove(this.#enterAnimClass);
        this.#screen.classList.remove(this.#leaveAnimClass);
        this.#screen.classList.remove(this.#leaveBackAnimClass);
    }
}