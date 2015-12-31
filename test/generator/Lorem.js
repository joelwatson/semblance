describe("Semblance.generator.Lorem", function() {
    var gen;
    
    beforeEach(function() {
        gen = new Semblance.generator.Lorem();
    });
    
    afterEach(function() {
        gen.getContext().destroy();
    });
    
    it("should return a lorem ipsum sentence, by default", function() {
        var value = gen.data(),
            min = gen.sentenceMin,
            max = gen.sentenceMax,
            wordCount = value.split(' ').length;
        
        expect(wordCount).not.toBeLessThan(min);
        expect(wordCount).not.toBeGreaterThan(max);
    });
    
    describe("words", function() {
        it("should return a word list if type is 'word'", function() {
            var value = gen.data(null, 'word'),
                wordCount = value.split(' ').length;
            
            // 1 is the default word count
            expect(wordCount).toBe(1);
        });
        
        it("should return number of words requested", function() {
            var count = 5,
                value = gen.data(count, 'word'),
                wordCount = value.split(' ').length;
            
            expect(wordCount).toBe(count);
        });
    });
    
    describe("sentences", function() {
        it("should return a paragraph if type is 'sentence'", function() {
            var value = gen.data(null, 'sentence'),
                sentenceCount = value.split('. ').length;
            
            // 1 is the default word count
            expect(sentenceCount).toBe(1);
        });
        
        it("should return number of sentences requested", function() {
            var count = 3,
                value = gen.data(count, 'sentence'),
                sentenceCount = value.split('. ').length;
            
            expect(sentenceCount).toBe(count);
        });
    });
    
    describe("paragraphs", function() {
        it("should return paragraphs if type is 'paragraph'", function() {
            var value = gen.data(null, 'paragraph'),
                paragraphCount = value.split('\r\n\r\n').length;
            
            // 1 is the default word count
            expect(paragraphCount).toBe(1);
        });
        
        it("should return number of sentences requested", function() {
            var count = 3,
                value = gen.data(count, 'paragraph'),
                paragraphCount = value.split('\r\n\r\n').length;
            
            expect(paragraphCount).toBe(count);
        });
    });
});