describe("Semblance.generator.person.Race", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.person.Race();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a race from the list", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});