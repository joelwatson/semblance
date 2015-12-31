describe("Semblance.Context", function() {
    var context;
    
    beforeEach(function() {
        context = new Semblance.Context();
    });
    
    afterEach(function() {
        context.destroy();
    });
    
    describe("setup", function() {
        it("should initialize generators collection", function() {
            var collection = context.generators;
            
            expect(collection.isMixedCollection).toBe(true);
            expect(collection.getCount()).toBe(0);
        });
        
        it("should setup data tracker", function() {
            expect(context.data).toEqual({});
        });
    });
    
    describe("destroy", function() {
        it("should destroy the context", function() {
            context.destroy();
            
            expect(context.destroyed).toBe(true);
        });
        
        it("should destroy the generators", function() {
            var generator = context.getGenerator('person.firstname');
            
            context.destroy();
            
            expect(context.generators.getCount()).toBe(0);
            expect(generator.destroyed).toBe(true);
        });
    });
    
    describe("data", function() {
        describe("resetData", function() {
            it("should clear data tracker", function() {
                context.resetData();
                
                expect(context.data).toEqual({});
            });
        });
        
        describe("updateData", function() {
            it("should update data tracker", function() {
                context.updateData('bar', 25, ['foo']);
                context.updateData('baz', 'testing', []);

                expect(context.data.foo.bar).toBe(25);
                expect(context.data.baz).toBe('testing');
            });
        });
        
        describe("getData", function() {
            it("should retrieve data for specified generator", function() {
                var value = context.getData('person.firstname');
                
                expect(value).not.toBe(null);
            });
        });
    });
    
    describe("generators", function() {
        describe("getGenerator", function() {
            it("should create new instance of generator", function() {
                var generator = context.getGenerator('person.firstname');
                
                expect(generator.isTemplate).toBe(true);
            });
            
            it("should retrieve existing instance of generator", function() {
                var generator = Semblance.generator.person.FirstName.prototype;
                
                spyOn(generator, 'constructor').and.callThrough();
                // force addition of the generator
                context.getGenerator('person.firstname');
                // now let's mock the call
                context.getData('person.firstname');

                expect(generator.constructor.calls.count()).toBe(1);
            });
        });
    });
});