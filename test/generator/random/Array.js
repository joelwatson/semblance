describe("Semblance.generator.random.Array", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.random.Array();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return an item from the generator's list", function() {
        var items = ['One', 'Two', 'Three'],
            value;
        
        gen.items = items;
        value = gen.data();
        
        expect(value).not.toBe(null);
        expect(Ext.Array.contains(items, value)).toBe(true);
    });
});