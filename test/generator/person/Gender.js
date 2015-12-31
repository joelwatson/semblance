describe("Semblance.generator.person.Gender", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.person.Gender();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return the gender of the last generated first name", function() {
        var value = gen.getContext().getData('person.firstname', ['male']);
        // should have a first name
        expect(value).not.toBe(null);
        // first name's gender should be used by gender's data()
        expect(gen.data()).toBe('male');
    });
});