describe("Semblance.generator.geo.address.Type", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.geo.address.Type();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return an address type", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});