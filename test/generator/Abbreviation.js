describe("Semblance.generator.Abbreviation", function() {
    var gen,
        items = [{
            abbr: 123,
            name: 'OneTwoThree'
        },{
            abbr: 456,
            name: 'FourFiveSix'
        }];
    
    beforeEach(function() {
        gen = new Semblance.generator.Abbreviation();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return 'name' by default", function() {
        var value;
        
        gen.items = items;
        value = gen.data();
        
        expect(value).not.toBe(null);
        expect(/OneTwoThree|FourFiveSix/.test(value)).toBe(true);
    });
    
    it("should return 'abbreviation' if requested", function() {
        var value;
        
        gen.items = items;
        value = gen.data(true);
        
        expect(value).not.toBe(null);
        expect(/123|456/.test(value)).toBe(true);
    });
});