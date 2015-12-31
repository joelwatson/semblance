describe("Semblance.generator.finance.creditcard.Number", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.finance.creditcard.Number();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a 16-digit number", function() {
        var value = gen.data();
        
        expect(value.length).toBe(16);
    });
    
    it("should return a number with a starting number sequence assigned to the card vendor ", function() {
        var discover = gen.data('Discover'),
            discoverRegex = /^6011/,
            amex = gen.data('AMEX'),
            amexRegex = /^34|37/;
        
        expect(discoverRegex.test(discover)).toBe(true);
        expect(amexRegex.test(amex)).toBe(true);
    });
});