describe("Semblance.generator.date.Timezone", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.date.Timezone();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a name", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
});