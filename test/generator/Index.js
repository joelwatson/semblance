describe("Semblance.generator.Index", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.Index();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return the current index of the context", function() {
        var context = gen.getContext(),
            value;
        
        // artificially set the index of the context
        context.index = 192;
        value = gen.data();
        
        expect(value).toBe(192);
    });
    
    it("should return the current index of the context padded with user-defined start", function() {
        var context = gen.getContext(),
            start = 50,
            value;
        
        // artificially set the index of the context
        context.index = 192;
        value = gen.data(start);
        
        expect(value).toBe(192+start);
    });
});