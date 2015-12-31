describe("Semblance.generator.geo.Longitude", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.geo.Longitude();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a latitudinal value between -180 and 180 degrees", function() {
        var value = gen.data(),
            majorVal = value.split('.')[0];
            
        expect(majorVal).not.toBeLessThan(-180);
        expect(majorVal).not.toBeGreaterThan(180);
    });
    
    it("should return a longitudinal value with 9 places of decimal precision", function() {
        var value = gen.data(),
            regex = /^(-)?[0-9]{1,3}\.[0-9]{9}/;
        
        expect(regex.test(value)).toBe(true);
    });
});