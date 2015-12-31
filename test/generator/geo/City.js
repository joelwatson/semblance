describe("Semblance.generator.geo.City", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.geo.City();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a city name", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});