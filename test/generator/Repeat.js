describe("Semblance.generator.Repeat", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.Repeat();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return an integer", function() {
        var value = gen.data();
        
        expect(typeof value).toBe('number');
    });
    
    it("should return an integer between min and max", function() {
        var min = 3,
            max = 19,
            value = gen.data(min, max);
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
    
    it("should return the minimum if no maximum is defined", function() {
        var min = 3,
            value = gen.data(min);
        
        expect(value).toBe(min);
    });
});