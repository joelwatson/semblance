describe("Semblance.generator.Company", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.Company();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a company name", function() {
        var value = gen.data();
        
        expect(value).not.toBe(null);
    });
});