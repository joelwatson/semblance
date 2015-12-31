describe("Semblance.generator.person.Suffix", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.person.Suffix();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a suffix from the list", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});