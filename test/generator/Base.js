describe("Semblance.generator.Base", function() {
    var gen, context;
    
    beforeEach(function() {
        gen = new Semblance.generator.Base();
    });
    
    afterEach(function() {
        if(gen.getContext()) {
            gen.getContext().destroy();
        }
    });
    
    describe("creation", function() {
        it("should get a new context if one is not provided via config", function() {
            expect(gen.getContext().isContext).toBe(true);        
        });
        
        it("should use context if provided via config", function() {
            var context, 
                borrowedContext,
                generator;
             
            borrowedContext = new Semblance.Context();  
            // tag it so we know it's borrowed
            borrowedContext.isBorrowed = true;
            
            generator = new Semblance.generator.Base({
                context: borrowedContext
            });
            
            context = generator.getContext();

            expect(context.isContext).toBe(true); 
            expect(context.isBorrowed).toBe(true); 
        });
    });
    
    describe("destruction", function() {
        beforeEach(function() {
            gen.destroy(); 
        });
        
        it("should remove reference to context", function() {
            expect(gen.getContext()).toBe(null);
        });
        
        it("should destroy the generator", function() {
            expect(gen.destroyed).toBe(true);
        });
    });
    
    describe("utilities", function() {
        describe("stringToBoolean", function() {
            it("should transform a string representation of a boolean to an actual boolean", function() {
                var falsey = gen.stringToBoolean("false"),
                    truthy = gen.stringToBoolean("17");
                
                expect(falsey).toBe(false);
                expect(truthy).toBe(true);
            });
        });
        
        describe("random", function() {
            it("should return an integer between two numbers", function() {
                var min = 3,
                    max = 962,
                    value = gen.random(min, max);
                
                expect(value).not.toBeLessThan(min);
                expect(value).not.toBeGreaterThan(max);
            });
        });
        
        describe("randomFloat", function() {
            it("should return a decimal between two numbers", function() {
                var min = 3,
                    max = 962,
                    value = gen.randomFloat(min, max);
                
                expect(value).not.toBeLessThan(min);
                expect(value).not.toBeGreaterThan(max);
            });
            
            it("should return a decimal with specified precision", function() {
                var min = 3,
                    max = 962,
                    fixed = 2,
                    value = gen.randomFloat(min, max, fixed),
                    decimal = value.toString().split('.'),
                    len = decimal.length ? decimal[1].length : 0;
                
                expect(len).not.toBeGreaterThan(fixed);
            });
        });
        
        describe("randomFln", function() {
            it("should return a string with specified number of characters", function() {
                var digits = 8,
                    value = gen.randomFln(digits);
                
                expect(value.length).toBe(digits);
            });
            
            it("should return a string comprised of the range of characters specified", function() {
                var digits = 8,
                    range = '01259',
                    value = gen.randomFln(digits, range),
                    regex = /^0|1|2|5|9{8}$/;
                
                expect(value.length).toBe(digits);
                expect(regex.test(value)).toBe(true);
            });
        });
        
        describe("replaceCharacterWithNumber", function() {
            it("should replace a templated string with random numbers", function() {
                var template = '345####',
                    value = gen.replaceCharacterWithNumber(template);
                
                expect(value.length).toBe(template.length);
                expect(/[0-9]{7}/.test(value)).toBe(true);
            });
            
            it("should replace a user-defined character ", function() {
                var template = '345%%%%',
                    character = '%',
                    value = gen.replaceCharacterWithNumber(template, character);
                
                expect(/[0-9]{7}/.test(value)).toBe(true);
            });
        });
    });
});