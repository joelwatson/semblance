describe("Semblance.generator.random.Float", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.random.Float();
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
        var min = 3.12,
            max = gen.defaultMax,
            value = gen.data(min);
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
    
    it("should return a value between the defaultMin and user-defined max", function() {
        var min = gen.defaultMin,
            max = 13.471,
            value = gen.data(min, max);
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
    
    it("should return a value between the user-defined min and user-defined max", function() {
        var min = 2.921,
            max = 1929.21,
            value = gen.data(min, max);
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
    
    it("should return a value with a fixed precision of 4 when no precision is provided", function() {
        var value = gen.data(),
            split = value.toString().split('.'),
            len = split.length ? split[1].length : 0;
            
        expect(len).toBe(4);
    });
    
    it("should return a value with user-defined fixed precision", function() {
        var value = gen.data(null, null, 3),
            split = value.toString().split('.')[1];
        
        expect(split.length).not.toBeGreaterThan(3);
    });
    
    it("should return a number when no format is provided", function() {
        var value = gen.data();
            
        expect(typeof value).toBe('number');
    });
    
    it("should return a string when a format is provided", function() {
        var value = gen.data(null, null, null, '0,000');
            
        expect(typeof value).toBe('string');
    });
});