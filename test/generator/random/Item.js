describe("Semblance.generator.random.Item", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.random.Item();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a value from the arguments provided", function() {
        var items = ['One', 'Two', 3, 4.21],
            value = gen.data.apply(gen, items);
        
        expect(value).not.toBe(null);
        expect(Ext.Array.contains(items, value)).toBe(true);
    });
});