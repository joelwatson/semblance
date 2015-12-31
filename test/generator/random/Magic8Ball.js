describe("Semblance.generator.random.Magic8Ball", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.random.Magic8Ball();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a company name", function() {
        var value = gen.data();
        
        expect(value).not.toBe(null);
    });
});