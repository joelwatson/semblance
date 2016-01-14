describe("Semblance.Api", function() {
    var api;
    
    beforeEach(function() {
        api = Semblance.Api;
        
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
    });
    
    describe("initialization", function() {
        it("should register all loaded generators", function(done) {
            setTimeout(function(){
                expect(api.foo.bar).not.toBe(null);
                done(); 
            }, 500);
        });
    });
    
    describe("generator registration", function() {
        it("should build out object paths based on aliases", function() {
            api.registerGenerator('Semblance.generator.foo.Bar');
            
            expect(api.foo.bar).not.toBe(null);
        });
        
        it("should bind terminal alias nodes to fake()", function() {
            api.registerGenerator('Semblance.generator.foo.Bar');
            
            expect(typeof api.foo.bar).toBe('function');
            // should be an anonymous fn since it's bound
            expect(api.foo.bar.$name).toBeUndefined();
        });
    });
    
    describe("fake() api facade", function() {
        it("should return the value from the call to alias-determined generator", function() {
            var value = api.foo.bar();
            
            expect(value).toBe('foo');
        });
        
        it("should create a context if one is not provided in the arguments", function() {
            spyOn(Semblance.Context.prototype, "constructor").and.callThrough();
            
            api.foo.bar();
            
            expect(Semblance.Context.prototype.constructor).toHaveBeenCalled();
        });
        
        it("should use the context provided, if defined", function() {
            var context;
            
            spyOn(Semblance.Context.prototype, "constructor").and.callThrough();
            
            context = new Semblance.Context();
            
            api.foo.bar(context);
            
            expect(Semblance.Context.prototype.constructor.calls.count()).toBe(1);
        });
        
        it("should pass user-defined arguments to context's getData() method", function() {
            var args,
                dataArgs;
            
            spyOn(Semblance.Context.prototype, "getData").and.callThrough();
            spyOn(Semblance.generator.foo.Bar.prototype, "data").and.callThrough();
            
            api.foo.bar('foo', 'bar');

            args = Semblance.Context.prototype.getData.calls.argsFor(0);
            dataArgs = args[1];

            expect(args.length).toBe(2);
            expect(dataArgs.length).toBe(2);
            expect(Semblance.generator.foo.Bar.prototype.data.calls.argsFor(0).length).toBe(2);
        });
        
        it("should destroy the context if it was created by the facade", function() {
            spyOn(Semblance.Context.prototype, "destroy").and.callThrough();
            
            api.foo.bar();
            
            expect(Semblance.Context.prototype.destroy).toHaveBeenCalled();
        });
        
        it("should not destroy the context if it was passed to the facade", function() {
            var context = new Semblance.Context();
            
            spyOn(Semblance.Context.prototype, "destroy").and.callThrough();
            
            api.foo.bar(context);
            
            expect(Semblance.Context.prototype.destroy).not.toHaveBeenCalled();
        });
    });
    
    describe("parse", function() {
        it("should internally delegate the call to the parse() method of Semblance.Parser", function() {
            spyOn(Semblance.Parser, "parse").and.callThrough();
            
            api.parse('{{foo.bar}}');
            
            expect(Semblance.Parser.parse).toHaveBeenCalled();
        });
    });
    
    describe("hasContext", function() {
        it("should return true/false if the arguments list contains a Semblance.Context instance", function() {
            var context = new Semblance.Context(),
                args1 = ['two', 'three', context],
                args2 = ['two', 'three', {foo:'bar'}];
            
            expect(api.hasContext(args1)).toBe(true);
            expect(api.hasContext(args2)).toBeFalsy();
        });
    });
    
    describe("getMethodArgs", function() {
        it("should create an arguments array that can be passed to the generator", function() {
            var args = ['foo.bar', 'two', 'three', {foo:'bar'}],
                finalArgs = api.getMethodArgs(args);
                
            expect(finalArgs.length).toBe(3);
            expect(finalArgs[0]).toBe('two');
            expect(finalArgs[1]).toBe('three');
            expect(finalArgs[2]).toEqual({foo:'bar'});
        });
    });
});