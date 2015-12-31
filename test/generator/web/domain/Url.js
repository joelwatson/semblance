describe("Semblance.generator.web.domain.Url", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.web.domain.Url();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a valid url", function() {
        var value = gen.data(),
            regex = /^(http|https):\/\/[a-z]+\.[a-z]+$/i;
        
        expect(regex.test(value)).toBe(true);
    });
    
    it("should have a protocol", function() {
        var value = gen.data(),
            protocol = value.split('://')[0];

        expect(/http|https/.test(value)).toBe(true);
    });
});