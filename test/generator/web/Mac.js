describe("Semblance.generator.web.Mac", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.web.Mac();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a valid mac address", function() {
        var value = gen.data(),
            regex = /^([A-Fa-f0-9]{1,2}[:]){5}[A-Fa-f0-9]{1,2}$/;
        
        expect(regex.test(value)).toBe(true);
    });
});