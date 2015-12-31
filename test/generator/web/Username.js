describe("Semblance.generator.web.Username", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.web.Username();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a username", function() {
        var value = gen.data(),
            regex = /^[a-z]+(\d{2})?$/i;
        
        expect(regex.test(value)).toBe(true);
    });
});