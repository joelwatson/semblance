describe("Semblance.generator.geo.address.Direction", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.geo.address.Direction();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return an address direction", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});