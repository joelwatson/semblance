describe("Semblance.generator.phone.AreaCode", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.phone.AreaCode();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return an area code from the list", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});