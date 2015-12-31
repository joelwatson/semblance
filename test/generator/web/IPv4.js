describe("Semblance.generator.web.IPv4", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.web.IPv4();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a valid IPv4 address", function() {
        var value = gen.data(),
            regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        
        expect(regex.test(value)).toBe(true);
    });
});