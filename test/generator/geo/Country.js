describe("Semblance.generator.geo.Country", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.geo.Country();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a country name by default", function() {
        var value = gen.data();
        expect(value.length).toBeGreaterThan(2);
    });
    
    it("should return a country abbreviation", function() {
        var value = gen.data(true),
            abbrRegex = /^[A-Z]{2}$/;
        
        expect(value.length).toBe(2);
        expect(abbrRegex.test(value)).toBe(true);
    });
});