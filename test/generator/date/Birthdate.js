describe("Semblance.generator.date.Birthdate", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.date.Birthdate();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    function calcAge(value) {
        var msDiff = new Date().getTime() - value.getTime(),
            date = new Date(msDiff);
        // not 100% accurate, but should be close enough for this test
        return Math.abs(date.getUTCFullYear() - 1970)
    }
    
    it("should return a default date between defaultMinAge and defaultMaxAge", function() {
        var min = gen.defaultMinAge,
            max = gen.defaultMaxAge,
            value = gen.data(),
            age = calcAge(value);
        
        expect(age).not.toBeLessThan(min);
        expect(age).not.toBeGreaterThan(max);
    });
    
    it("should return a value between defaultMinAge and user-defined max", function() {
        var min = gen.defaultMinAge,
            max = 65,
            value = gen.data(null, 65),
            age = calcAge(value);
        
        expect(age).not.toBeLessThan(min);
        expect(age).not.toBeGreaterThan(max);
    });
    
    it("should return a value between user-defined min and defaultMaxAge", function() {
        var min = 10,
            max = gen.defaultMaxAge,
            value = gen.data(min),
            age = calcAge(value);
        
        expect(age).not.toBeLessThan(min);
        expect(age).not.toBeGreaterThan(max);
    });
    
    it("should return a value between user-defined min and user-defined max", function() {
        var min = 13,
            max = 42,
            value = gen.data(min, max),
            age = calcAge(value);
        
        expect(age).not.toBeLessThan(min);
        expect(age).not.toBeGreaterThan(max);
    });
});