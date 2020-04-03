class MainGame{
    clickCount = 1;
    clickValue = 1;
    companionNumber = 1;
    clickCompanionCost = 100;
    addAutoClicks = 0;
}

    getClickCount = function(){
        return this.clickCount;
    }

    increaseCompanionMethod = function(){
        this.companionNumber ++
    }

    addCompounderMethod = function(){
        this.clickCompanionCost = this.clickCompanionCost + this.clickCompanionCost*.2
    }

    getCompanionNumber = function(){
        return this.companionNumber;
    }

    stopCompanionCount = function(){
        return this.
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

        this.()
    }

