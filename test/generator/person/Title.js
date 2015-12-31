describe("Semblance.generator.person.Title", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.person.Title();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a title from the list", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});