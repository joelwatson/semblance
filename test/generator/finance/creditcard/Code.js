describe("Semblance.generator.finance.creditcard.Code", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.finance.creditcard.Code();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a credit card code between defaultMin and defaultMax values", function() {
        var min = gen.defaultMin,
            max = gen.defaultMax,
            value = gen.data();
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
});