export default class Screen
{
    #screen;
    #childContainer;
    #enterClass = 'enter';
    #leaveClass = 'leave';
    #leaveBackClass = 'leave-back';
    #enterAnimClass = 'in-slide';
    #leaveAnimClass = 'out-slide';
    #leaveBackAnimClass = 'out-slide-back';
    #stages = {};
    #stagesBlocks;
    #currentStage;
    #stagesActive = false;
    #saveChildrenClassTillAnim = false;
    #saveChildrenClassPermanent = false;


    constructor(screenSelector, options = {})
    {
        this.#screen = document.querySelector(`${screenSelector}`);
        this.transitionTime = options.transitionTime ?? 1000;
        this.delayTime = options.delayTime ?? this.transitionTime;
        
        this.isActive = false;
        this.#childContainer = this.#screen.firstElementChild;
        this.#screen.style.setProperty('--anim-delay', this.transitionTime + 'ms')

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

        if(options.stages) {
            this.#stages = options.stages;
            this.#stagesBlocks = document.querySelectorAll(options.stages.selector);
            this.setStages();
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
        this.#screen.classList.add(this.#enterClass);
        this.#screen.classList.remove(this.#leaveClass);
        this.#screen.classList.remove(this.#leaveBackClass);

        if(this.#saveChildrenClassTillAnim) {
            setTimeout(() => {
                this.#childContainer.classList.add(this.#enterClass);
                this.#childContainer.classList.remove(this.#leaveClass);
                this.#childContainer.classList.remove(this.#leaveBackClass);
            }, this.transitionTime);
        } else {
            this.#childContainer.classList.add(this.#enterClass);
            this.#childContainer.classList.remove(this.#leaveClass);
            this.#childContainer.classList.remove(this.#leaveBackClass);
        }

        this.#screen.classList.add(this.#enterAnimClass);
        this.#screen.classList.remove(this.#leaveAnimClass);
        this.#screen.classList.remove(this.#leaveBackAnimClass);
    }

    leave()
    {
        this.#screen.classList.remove(this.#enterClass);
        this.#screen.classList.add(this.#leaveClass);
        this.#screen.classList.remove(this.#leaveBackClass);

        if(this.#saveChildrenClassTillAnim) {
            setTimeout(() => {
                this.#childContainer.classList.remove(this.#enterClass);
                this.#childContainer.classList.add(this.#leaveClass);
                this.#childContainer.classList.remove(this.#leaveBackClass);
            }, this.transitionTime);
        } else if(!this.#saveChildrenClassPermanent) {
            this.#childContainer.classList.remove(this.#enterClass);
            this.#childContainer.classList.add(this.#leaveClass);
            this.#childContainer.classList.remove(this.#leaveBackClass);
        }

        this.#screen.classList.remove(this.#enterAnimClass);
        this.#screen.classList.add(this.#leaveAnimClass);
        this.#screen.classList.remove(this.#leaveBackAnimClass);
    }

    leaveBack()
    {
        this.#screen.classList.remove(this.#enterClass);
        this.#screen.classList.remove(this.#leaveClass);
        this.#screen.classList.add(this.#leaveBackClass);

        if(this.#saveChildrenClassTillAnim) {
            setTimeout(() => {
                this.#childContainer.classList.remove(this.#enterClass);
                this.#childContainer.classList.remove(this.#leaveClass);
                this.#childContainer.classList.add(this.#leaveBackClass);
            }, this.transitionTime);
        } else if(!this.#saveChildrenClassPermanent) {
            this.#childContainer.classList.remove(this.#enterClass);
            this.#childContainer.classList.remove(this.#leaveClass);
            this.#childContainer.classList.add(this.#leaveBackClass);
        }

        this.#screen.classList.remove(this.#enterAnimClass);
        this.#screen.classList.remove(this.#leaveAnimClass);
        this.#screen.classList.add(this.#leaveBackAnimClass);
    }

    clearClasses()
    {
        this.#screen.classList.remove(this.#enterClass);
        this.#childContainer.classList.remove(this.#enterClass);
        this.#screen.classList.remove(this.#leaveClass);
        this.#childContainer.classList.remove(this.#leaveClass);
        this.#screen.classList.remove(this.#leaveBackClass);
        this.#childContainer.classList.remove(this.#leaveBackClass);
    }
}