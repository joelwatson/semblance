describe("Semblance.generator.web.domain.Extension", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.web.domain.Extension();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a domain extension", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});