describe("Semblance.generator.person.LastName", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.person.LastName();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a name", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});