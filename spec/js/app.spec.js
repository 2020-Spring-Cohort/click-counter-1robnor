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



})