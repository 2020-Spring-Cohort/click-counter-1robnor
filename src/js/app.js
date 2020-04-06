class ClickCounter{

    constructor(){    
        this.clickCount = 0;
        this.clickValue = 1;
        this.companionCount = 0;
        this.clickCompanionCost = 100;
        this.compounderCount = 0;
        this.compounderCost = 100;
        this.collectiveCulminationCompunderCost = 10;
        this.collectiveCulminationCompounderCount = 0;
    }
    clickCount = 0;
    clickCount = function(){
        this.clickCount ++
    }
    getClickCount = function(){
        return this.clickValue;
    }
    companionNumber = 0;
    clickCompanionCost = 100;
    increaseCompanion = function(){
        this.companionNumber ++
    }
    addCompounder = function(){
        this.clickCompanionCost = this.clickCompanionCost + this.clickCompanionCost*.2
    }
    getCompanionNumber = function(){
        return this.companionNumber;
    }
    buyCompanion = function(){
        this.increaseCompanion()

        this.clickCount = this.clickCount - this.clickCompanionCost
    }
    buySecondCompanion = function(){
        this.increaseCompanion()

        this.clickCompanionCost = this.clickCount ++ %10 
    }
    buyContinuousCompanions = function(){
        this.increaseCompanion()

        this.clickCompanionCost ++ %10
    }
    stopCompanionCount = function(){
        this.increaseCompanion()

        this.addCompounder; 
    }
    addAutoClick = function(){
        this.increaseCompanion()

        this.addAutoClick;
    }
    buyCollectiveCulminationCompounder = function(){
        this.addCompounder()

        this.collectiveCulminationCompounder = this.collectiveCulminationCompunderCost - this.clickCount
    }
    addCollectiveCulminationCompounder = function(){
        this.collectiveCulminationCompunderCost = this.collectiveCulminationCompunderCost + this.collectiveCulminationCompunderCost*.2
    }
    secondCollectiveCulminationCompounder = function(){
        this.addCompounder()

        this.collectiveCulminationCompounder = this.collectiveCulminationCompunderCost - this.clickCount ++ %10 
    }
    continuousCollectiveCulminationCompounder = function(){
        this.addCompounder()

        this.collectiveCulminationCompounderCount ++ %10

    }
}