describe("Semblance.generator.person.FirstName", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.person.FirstName();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a name", function() {
        var value = gen.data();
        expect(value).not.toBe(null);
    });
    
    it("should return a male name", function() {
        var value = gen.data('m');
        expect(value).not.toBe(null);
        expect(Ext.Array.indexOf(gen.maleNames, value)).not.toBe(-1);
    });
    
    it("should return a female name", function() {
        var value = gen.data('f');
        expect(value).not.toBe(null);
        expect(Ext.Array.indexOf(gen.femaleNames, value)).not.toBe(-1);
    });
    
    it("getGender should return the appropriate gender for the passed name", function() {
        expect(gen.getGender('Charles')).toBe('male');
        expect(gen.getGender('Elizabeth')).toBe('female');
    });
});