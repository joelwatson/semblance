describe("Semblance.generator.geo.address.Street", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.geo.address.Street();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a street address with four parts", function() {
        var value = gen.data(),
            split = value.split(' ');
        
        expect(split.length).toBe(4);
    });
});