describe("Cookie Clicker Camlamity", function(){

    let sut;
    
    beforeEach(function(){
        sut = new ClickCounter
        sut.clickCount = 0
    })

    describe("Main Actions", function(){

        it("clickCount should increase click count by 1", function(){
            sut.getClickCount()

            expect(sut.getClickCount()).toBe(1)
        })

        it("should return 1 after clickCount", function(){
            sut.getClickCount()

            expect(sut.getClickCount()).toBe(1)
        })

    })

    describe("Click Companions", function(){

        it("should return a clickCompanion", function(){
            sut.increaseCompanion()

            expect(sut.companionNumber).toBe(1)
        })

        it("should return 1 after increaseCompanion", function(){
            sut.increaseCompanion()

            expect(sut.getCompanionNumber()).toBe(1)
        })

        it("should subtract the clickCompanionCost from your current clickCount", function(){
            sut.increaseCompanion()

            expect(sut.buyCompanion()).toBe()
        })

        it("should increase the clickCompainonCost by %10 to be 110 for second purchase", function(){
            sut.increaseCompanion()

            expect(sut.buySecondCompanion()).toBe()
        })

        it("should increase the cost of every additional clickCompanionCost by an additional %10", function(){
            sut.increaseCompanion()

            expect(sut.buyContinuousCompanions()).toBe()
        })

        it("should ensure there are enough clickCount to buy a clickCompanionCost", function(){
            sut.increaseCompanion()

            expect(sut.stopCompanionCount()).toBe()
        })

        it("when the addAutoClicks event is executed, add the amount of campanionNumber to the click total", function(){
            sut.increaseCompanion()

            expected(sut.increaseCompanion()).toBe()
        })
        it("should purchase a collectiveCulminationCompounder with 10 clicks from your clickCount", function(){
            sut.addCompounder()

            expected(sut.buyCCCompounder()).toBe()
        })
    })
})