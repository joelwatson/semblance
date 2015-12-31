describe("Semblance.generator.date.Time", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.date.Time();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a string", function() {
        var value = gen.data();
        
        expect(Ext.isString(value)).toBe(true);
    });
    
    it("should return a time with no meridiem by default", function() {
        var value = gen.data(),
            regex = /.*?AM|PM$/;
        
        expect(regex.test(value)).toBe(false);
    });
    
    it("should return a time formatted with meridiem, if specified", function() {
        var value = gen.data(true),
            regex = /.*?AM|PM$/;
        
        expect(regex.test(value)).toBe(true);
    });
    
    it("should be formatted as a time with no leading zeros for hour/minute when meridiem is used", function() {
        var value = gen.data(true),
            regex = /^[0-9]{1,2}:[0-9]{2}(\s(AM|PM))?$/;
        
        expect(regex.test(value)).toBe(true);
    });
    
    it("should be formatted as a time with leading zeros for hour/minute when meridiem is not used", function() {
        var value = gen.data(false),
            regex = /^[0-9]{2}:[0-9]{2}$/;
        
        expect(regex.test(value)).toBe(true);
    });
});