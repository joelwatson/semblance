describe("Semblance.generator.person.Language", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.person.Language();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a language from the list", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});