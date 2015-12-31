describe("Semblance.generator.date.Between", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.date.Between();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a valid date", function() {
        var value = gen.data();
        
        expect(Ext.isDate(value)).toBe(true);
    });
    
    it("should return a default date between defaultMin and defaultMax", function() {
        var min = gen.defaultMin.getTime(),
            max = gen.defaultMax.getTime(),
            value = gen.data(min, max).getTime();
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
    
    it("should return a value between defaultMin and user-defined max", function() {
        var min = gen.defaultMin.getTime(),
            max = new Date('2012-01-01').getTime(),
            value = gen.data(min, max).getTime();
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
    
    it("should return a value between user-defined min and defaultMax", function() {
        var min = new Date('1901-01-01').getTime(),
            max = gen.defaultMax.getTime(),
            value = gen.data(min, max).getTime();
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
    
    it("should return a value between user-defined min and user-defined max", function() {
        var min = new Date('1901-01-01').getTime(),
            max = new Date('2012-01-01').getTime(),
            value = gen.data(min, max).getTime();
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
    
    it("should apply user-defined format", function() {
        var value1 = gen.data(null, null, 'd/m/Y'),
            value2 = gen.data(null, null, 'Y-m-d'),
            r1 = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/,
            r2 = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
        
        expect(r1.test(value1)).toBe(true);
        expect(r2.test(value2)).toBe(true);
    });
});