describe("Semblance.generator.geo.PostalCode", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.geo.PostalCode();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a postal code", function() {
        var value = gen.data(),
            regex = /^[0-9]{5}(-[0-9]{4})?$/;
        
        expect(regex.test(value)).toBe(true);
    });
    
    it("should return a postal code with the correct state prefix", function() {
        var value = gen.data('WY'),
            regex = /^831[0-9]{2}(-[0-9]{4})?$/;
        
        expect(regex.test(value)).toBe(true);
    });
    
    it("should return a full postal code if requested", function() {
        var value = gen.data(null, true),
            regex = /^[0-9]{5}-[0-9]{4}$/;
        
        expect(regex.test(value)).toBe(true);
    });
});