describe("Semblance.generator.web.FileType", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.web.FileType();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a file type", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});