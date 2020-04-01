class MainGame{

    clickCount = 0;
    clickMethod = function(){
        this.clickCount ++
    }

    getClickCount = function(){
        return this.clickCount;
    }

    companionNumber = 0;
    clickCompanionCost = 100;
    increaseCompanionMethod = function(){
        this.companionNumber ++
    }

    addCompounderMethod = function(){
        this.clickCompanionCost = this.clickCompanionCost + this.clickCompanionCost*.2
    }

    getCompanionNumber = function(){
        return this.companionNumber;
    }

    buyCompanion = function(){
        this.increaseCompanionMethod()

        this.clickCount = this.clickCount - this.clickCompanionCost
    }

    buySecondCompanion = function(){
        this.increaseCompanionMethod()

        this.clickCompanionCost = this.clickCount ++ %10 
    }

    buyContinuousCompanions = function(){
        this.increaseCompanionMethod()

        this.clickCompanionCost ++ %10
    }
      
    stopCompanionCount = function(){
        this.increaseCompanionMethod()

        this.addCompounderMethod()
    }

    addAutoClicks = function () {
        this.increaseCompanionMethod()

        this.addAutoClicks()
    }
}