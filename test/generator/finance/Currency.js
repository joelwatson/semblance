describe("Semblance.generator.finance.Currency", function() {
    var gen, codeRegex;
    
    beforeEach(function() {
        gen = new Semblance.generator.finance.Currency();
        codeRegex = /^[A-Z]{3}(\s[A-Z]{3})?$/;
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a currency code when no return type is specified", function() {
        var value = gen.data();
        expect(codeRegex.test(value)).toBe(true);
    });
    
    it("should return a currency code when 'code' type is specified", function() {
        var value = gen.data('code');
        expect(codeRegex.test(value)).toBe(true);
    });
    
    it("should return a currency name when 'name' type is specified", function() {
        var value = gen.data('name');
        expect(value).toBeDefined();
    });
    
    it("should return a currency symbol when 'symbol' type is specified", function() {
        var value = gen.data('symbol');
        expect(value).toBeDefined();
    });
});