describe("Semblance.generator.random.Boolean", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.random.Boolean();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a boolean value", function() {
        var value = gen.data();
        
        expect(typeof value).toBe('boolean');
    });
});