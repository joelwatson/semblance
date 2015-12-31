describe("Semblance.generator.geo.Latitude", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.geo.Latitude();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a latitudinal value between -90 and 90 degrees", function() {
        var value = gen.data(),
            majorVal = value.split('.')[0];
            
        expect(majorVal).not.toBeLessThan(-90);
        expect(majorVal).not.toBeGreaterThan(90);
    });
    
    it("should return a latitudinal value with 9 places of decimal precision", function() {
        var value = gen.data(),
            regex = /^(-)?[0-9]{1,3}\.[0-9]{9}/;
        
        expect(regex.test(value)).toBe(true);
    });
});