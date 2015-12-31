describe("Semblance.generator.random.UUID", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.random.UUID();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a valid UUID", function() {
        var value = gen.data(),
            justChars = value.replace(/-/g, ''),
            regex = /^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/;
        
        expect(justChars.length).toBe(32);
        expect(regex.test(value)).toBe(true);
    });
});