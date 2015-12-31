describe("Semblance.generator.web.MimeType", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.web.MimeType();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a mimetype", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});