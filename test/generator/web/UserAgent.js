describe("Semblance.generator.web.UserAgent", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.web.UserAgent();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a user agent", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});