describe("Semblance.generator.geo.address.Number", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.geo.address.Number();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a house number between defaultMin and defaultMax values", function() {
        var min = gen.defaultMin,
            max = gen.defaultMax,
            value = gen.data();
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
});