describe("Semblance.generator.web.Email", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.web.Email();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a valid email address", function() {
        var value = gen.data(),
            // email format is controlled, so a simple regex should do...
            regex = /^[a-z]+\.[a-z]+@[a-z]+\.+com$/;
        
        expect(regex.test(value)).toBe(true);
    });
    
    it("should return a random email if requested", function() {
        var value = gen.data(true),
            context = gen.getContext(),
            fn = context.getData('person.firstname'),
            ln = context.getData('person.lastname'),
            co = context.getData('company'),
            combined = Ext.String.format('{0}.{1}@{2}.com', fn.toLowerCase(), ln.toLowerCase(), co.toLowerCase());
        
        expect(value).not.toBe(combined);
    });
    
    it("should return a generated email from user details if possible", function() {
        var context = gen.getContext(),
            fn = context.getData('person.firstname'),
            ln = context.getData('person.lastname'),
            co = context.getData('company'),
            value = gen.data(),
            combined = Ext.String.format('{0}.{1}@{2}.com', fn.toLowerCase(), ln.toLowerCase(), co.toLowerCase());
        
        expect(value).toBe(combined);
    });
});