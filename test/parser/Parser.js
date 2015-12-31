describe("Semblance.Parser", function() {
    var parser, tpl;
    
    beforeEach(function() {
        parser = Semblance.Parser;   
        
        // define a fake generator
        Ext.define('Semblance.generator.foo.Bar', {
            extend: 'Semblance.generator.Base',
            alias: 'semblance.foo.bar',
            data: function(foo, bar) {
                return 'foo';
            }
        });
    });
    
    afterEach(function() {
        Ext.undefine('Semblance.generator.foo.Bar'); 
        tpl = null;
    });
    
    describe("parse", function() {
        it("should return a string if the passed template is a string", function() {
            var value = parser.parse('{{foo.bar}}');
            
            expect(typeof value).toBe('string');
            expect(value).toBe('foo');
        });
        
        it("should return an object if the passed template is an object", function() {
            var value = parser.parse({
                name:'{{foo.bar}}'
                
            });
            
            expect(typeof value).toBe('object');
            expect(value).toEqual({name:'foo'});
        });
        
        it("should return an array if the passed template is an array", function() {
            var value = parser.parse(['{{foo.bar}}']);
            
            expect(Ext.isArray(value)).toBe(true);
            expect(value).toEqual(['foo']);
        });
        
        it("should return user-defined structure if the passed template is a function", function() {
            var value = parser.parse(
                function(api, index) {
                    return 'foo' + index;
                });
            
            expect(typeof value).toBe('string');
            expect(value).toBe('foo0');
        });
    });
    
    describe("isRepeater", function() {
        it("should return a boolean if the template string is a repeater", function() {
            expect(parser.isRepeater(['{{foo.bar}}'])).toBe(false);
            expect(parser.isRepeater(['{{repeat(2)}}'])).toBe(true);
            expect(parser.isRepeater(['google'])).toBe(false);
        });
    });
    
    describe("executeTemplate", function() {
        it("should call getData() on the passed context", function() {
            var context = new Semblance.Context();
            
            spyOn(context, 'getData');
            
            parser.executeTemplate('{{foo.bar}}', context);
            
            expect(context.getData).toHaveBeenCalled();
        });
    });
    
    describe("parseRepeater", function() {
        beforeEach(function() {
            tpl = ['{{repeat(2)}}', {
                foo: '{{foo.bar}}' 
            }];
        });
        
        it("should return an array of the defined size", function() {
            var value = parser.parse(tpl);
            
            expect(value.length).toBe(2);
        });
        
        it("should create a new context", function() {
            spyOn(Semblance.Context.prototype, 'constructor').and.callThrough();
            
            parser.parse(tpl);
            
            expect(Semblance.Context.prototype.constructor).toHaveBeenCalled();
        });
        
        it("should destroy the context after iteration is complete", function() {
            spyOn(Semblance.Context.prototype, 'destroy').and.callThrough();
            
            parser.parse(tpl);
            
            expect(Semblance.Context.prototype.destroy).toHaveBeenCalled();
        });
    });
    
    describe("parseAlias", function() {
        it("should return the alias from passed template string", function() {
            var value = parser.parseAlias('{{foo.bar()}}');
            
            expect(value).toBe('foo.bar');
        });
    });
    
    describe("parseArguments", function() {
        it("should return an array of arguments from passed template string", function() {
            var tpl = '{{foo.bar("one", 2)}}',
                args = parser.parseArguments(tpl);
            
            expect(args.length).toBe(2);
        });
    });
    
    describe("parseFunction", function() {
        it("should return a value", function() {
            var value = parser.parse(
                function(api, index) {
                    return 'foo' + index;
                });
                
            expect(value).not.toBe(null);
        });
    });
    
    describe("parseString", function() {
        it("should return a string", function() {
            var value = parser.parse('{{foo.bar}}');
            
            expect(typeof value).toBe('string');
        });
        
        it("should build a string from multiple templates in same input", function() {
            var value = parser.parse('{{foo.bar}} {{foo.bar}}');
            
            expect(value).toBe('foo foo');
        });
    });
    
    describe("parseArray", function() {
        it("should return an array", function() {
            var value = parser.parse(['one', 2, {foo:'bar'}]);
            
            expect(value.length).toBe(3);
        });
    });
    
    describe("parseObject", function() {
        it("should return an object", function() {
            var value = parser.parse({foo:'bar', baz: 1234});
            
            expect(typeof value).toBe('object');
            expect(value.baz).toBe(1234);
        });
    });
});