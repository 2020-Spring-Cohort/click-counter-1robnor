class MainGame{

    clickCount = 0;
    clickMethod = function(){
        this.clickCount ++
    }

    getClickCount = function(){
        return this.clickCount;
    }

}