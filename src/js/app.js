class MainGame{
    clickCount = 1;
    clickValue = 1;
    companionNumber = 1;
    clickCompanionCost = 100;
    compounderCost = 0;
    compounderCount = 0;
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

        if(clickCount < clickCompanionCost); 
    }

    addAutoClick = function(){
        this.increaseCompanionMethod()

        this.companionNumber + clickCount;
    }

    newCompounder = function(){
        this.addCompounderMethod()

        this.compounderCost - this.clickCount;
    }