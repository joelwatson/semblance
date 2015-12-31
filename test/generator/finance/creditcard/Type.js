describe("Semblance.generator.finance.creditcard.Type", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.finance.creditcard.Type();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a name", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});