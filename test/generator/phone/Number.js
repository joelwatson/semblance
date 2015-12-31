describe("Semblance.generator.phone.Number", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.phone.Number();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a 10-digit phone number", function() {
        var value = gen.data();
        
        value = value.replace(/[^0-9]/g, '');
        expect(value.length).toBe(10);
    });
    
    it("should return a number with a default format of (xxx) xxx-xxxx", function() {
        var value = gen.data(),
            regex = /\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/;
        
        expect(regex.test(value)).toBeTruthy();
    });
    
    it("should apply a custom format of xxx-xxx-xxxx", function() {
        var value = gen.data('xxx-xxx-xxxx'),
            regex = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
        
        expect(regex.test(value)).toBeTruthy();
    });
});