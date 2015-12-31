describe("Semblance.generator.web.IPv6", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.web.IPv6();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a valid IPv6 address", function() {
        var value = gen.data(),
            regex = /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/i;
        
        expect(regex.test(value)).toBe(true);
    });
});