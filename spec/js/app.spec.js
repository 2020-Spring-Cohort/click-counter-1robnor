describe("Cookie Clicker Camlamity", function(){

    let sut;
    
    beforeEach(function(){
        sut = new MainGame
        sut.clickCount = 0
    })

    describe("Main Actions", function(){

        it("clickAction should increase click count by 1", function(){
            sut.clickMethod()

            expect(sut.clickCount).toBe(1)
        })

        it("should return 1 after clickMethod", function(){
            sut.clickMethod()

            expect(sut.getClickCount()).toBe(1)
        })

    })

    describe("Click Companions", function(){

        it("should return a clickCompanion", function(){
            sut.increaseCompanionMethod()

            expect(sut.companionNumber).toBe(1)
        })

        it("should return 1 after increaseCompanionMethod", function(){
            sut.increaseCompanionMethod()

            expect(sut.getCompanionNumber()).toBe(1)
        })

        it("should subtract the clickCompanionCost from your current clickCount", function(){
            sut.increaseCompanionMethod()

            expect(sut.buyCompanion()).toBe()
        })

        it("should increase the clickCompainonCost by %10 to be 110 for second purchase", function(){
            sut.increaseCompanionMethod()

            expect(sut.buySecondCompanion()).toBe()
        })

        it("should increase the cost of every additional clickCompanionCost by an additional %10", function(){
            sut.increaseCompanionMethod()

            expect(sut.buyContinuousCompanions()).toBe()
        })

        it("should ensure there are enough clickCount to buy a clickCompanionCost", function(){
            sut.increaseCompanionMethod()

            expect(sut.stopCompanionCount()).toBe()
        })

        it("when the addAutoClicks event is executed, add the amount of campanionNumber to the click total", function(){
            sut.increaseCompanionMethod()

            expected(sut.addAutoClicks()).toBe()
        })
    })


})