describe("Semblance.generator.web.domain.Protocol", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.web.domain.Protocol();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a protocol", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});