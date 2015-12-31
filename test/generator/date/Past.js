describe("Semblance.generator.date.Past", function() {
    var gen, max;
    
    beforeEach(function() {
        gen = new Semblance.generator.date.Past();
        max = Ext.Date.subtract(new Date(), Ext.Date.DAY, 1).getTime();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a default date in the past between yesterday and the defaultMaxYears", function() {
        var min = Ext.Date.subtract(new Date(), Ext.Date.YEAR, gen.defaultMaxYears).getTime(),
            value = gen.data().getTime();
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
    
    it("should return a default date in the past between yesterday and the user-defined max years", function() {
        var min = Ext.Date.subtract(new Date(), Ext.Date.YEAR, 47).getTime(),
            value = gen.data(47).getTime();
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
});