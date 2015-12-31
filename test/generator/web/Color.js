describe("Semblance.generator.web.Color", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.web.Color();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a color name by default", function() {
        var value = gen.data();
        
        expect(value).not.toBe(null);
        expect(Ext.Array.contains(gen.items, value)).toBe(true);
    });
    
    it("should return a color name if type is 'name'", function() {
        var value = gen.data('name');
        
        expect(Ext.Array.contains(gen.items, value)).toBe(true);
    });
    
    it("should return a lower-case color name if lowercase is specified", function() {
        var value = gen.data('name', true);
        
        expect(value).toBe(value.toLowerCase());
    });
    
    it("should return an rgb string if type is 'rgb'", function() {
        var value = gen.data('rgb'),
            regex = /^rgb\(\d{1,3},\s?\d{1,3},\s?\d{1,3}\)$/;
        
        expect(regex.test(value)).toBe(true);
    });
    
    it("should return an rgba string if type is 'rgba'", function() {
        var value = gen.data('rgba'),
            regex = /^rgba\(\d{1,3},\s?\d{1,3},\s?\d{1,3},\s?(\d{1}|\d{1}\.\d{1})\)$/;
        
        expect(regex.test(value)).toBe(true);
    });
    
    it("should return an hex string if type is 'hex'", function() {
        var value = gen.data('hex'),
            regex = /^#[a-f\d]{6}$/i;

        expect(regex.test(value)).toBe(true);
    });
});