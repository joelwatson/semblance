describe("Semblance.generator.random.Integer", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.random.Integer();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a value between the defaultMin and defaultMax", function() {
        var min = gen.defaultMin,
            max = gen.defaultMax,
            value = gen.data();
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
    
    it("should return a value between the user-defined min and defaultMax", function() {
        var min = 3,
            max = gen.defaultMax,
            value = gen.data(min);
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
    
    it("should return a value between the defaultMin and user-defined max", function() {
        var min = gen.defaultMin,
            max = 13,
            value = gen.data(min, max);
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
    
    it("should return a value between the user-defined min and user-defined max", function() {
        var min = 2,
            max = 1929,
            value = gen.data(min, max);
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
    
    
    it("should return a number when no format is provided", function() {
        var value = gen.data();
            
        expect(typeof value).toBe('number');
    });
    
    it("should return a string when a format is provided", function() {
        var value = gen.data(null, null, '0,000');
            
        expect(typeof value).toBe('string');
    });
});