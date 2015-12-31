describe("Semblance.generator.web.domain.Name", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.web.domain.Name();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a domain name", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
    
    it("should have a valid extension", function() {
        var value = gen.data(),
            extension = value.split('.')[1],
            extensions = new Semblance.generator.web.domain.Extension().items;

        expect(Ext.Array.contains(extensions, extension)).toBe(true);
    });
});