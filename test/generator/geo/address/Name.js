describe("Semblance.generator.geo.address.Name", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.geo.address.Name();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return an address name", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});