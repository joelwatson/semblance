describe("Semblance.generator.date.Future", function() {
    var gen, min;
    
    beforeEach(function() {
        gen = new Semblance.generator.date.Future();
        min = Ext.Date.add(new Date(), Ext.Date.DAY, 1).getTime();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a default date in the future between tomorrow and the defaultMaxYears", function() {
        var max = Ext.Date.add(new Date(), Ext.Date.YEAR, gen.defaultMaxYears).getTime(),
            value = gen.data().getTime();
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
    
    it("should return a default date in the future between tomorrow and the user-defined max years", function() {
        var max = Ext.Date.add(new Date(), Ext.Date.YEAR, 52).getTime(),
            value = gen.data(52).getTime();
        
        expect(value).not.toBeLessThan(min);
        expect(value).not.toBeGreaterThan(max);
    });
});