describe("Semblance.generator.geo.address.Mailing", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.geo.address.Mailing();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a valid mailing address (address, city, state, postal code)", function() {
        var value = gen.data(),
            addyRegex = /[a-z0-9\s]+,\s[a-z]{2}\s[0-9]{5}(-[0-9]{4})?$/i;
        
        expect(addyRegex.test(value)).toBe(true);
    });
});