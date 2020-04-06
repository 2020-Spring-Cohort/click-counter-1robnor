class ClickCounter{

    constructor(){    
        this.clickCount = 0;
        this.clickValue = 1;
        this.companionCount = 0;
        this.clickCompanionCost = 100;
        this.compounderCost = 0;
        this.compounderCount = 100;
    }
    clickCount = 0;
    clickCount = function(){
        this.clickCount ++
    }
    getClickCount = function(){
        return this.clickCount;
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
    newCompounder = function(){
        this.addCompounder()

        this.compounderCost - this.clickCount;
    }
}