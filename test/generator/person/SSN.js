describe("Semblance.generator.person.SSN", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.person.SSN();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a social security number", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
    
    it("should return a string in xxx-xx-xxxx format", function() {
        var value = gen.data(),
            split = value.split('-');
        
        // should have 3 parts
        expect(split.length).toBe(3);
        // first part: 'xxx'
        expect(split[0].length).toBe(3);
        // second part: 'xx'
        expect(split[1].length).toBe(2);
        // third part: 'xxxx'
        expect(split[2].length).toBe(4);
    });
});