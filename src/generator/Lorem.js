Ext.define('Semblance.generator.Lorem', {
	extend: 'Semblance.generator.Base',
	alias: 'semblance.lorem',
	sentenceMin: 15,
	sentenceMax: 20,
	paragraphMin: 3,
	paragraphMax: 7,
	defaultCount: 1,
	defaultType: 'sentence',
	words: ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"],
	
	data: function (count, type) {
		var me = this,
			count = count || me.defaultCount,
			type = type || me.defaultType,
			text;

		switch(type) {
			case 'word': 
				text = me.generateWords(count);
				break;
			case 'paragraph':
				text = me.generateParagraphs(count);
				break;
			case 'sentence':
			default:
				text = me.generateSentences(count);
				break;
		}

		return text;
	},

	/**
	 * Generates list of words
	 * @param {Number} count The number of words to generate
	 * @return {String}
	 */
	generateWords: function (count) {
		var list = '',
			len = this.words.length,
			word, i;

		for (i=0; i<count; i++) {
			word = this.words[this.random(0, len-1)];
			list += i===0 ? word : ' ' + word;
		}
		return list;
	},

	/**
	 * Generates list of sentences
	 * @param {Number} count The number of sentences to generate
	 * @return {String}
	 */
	generateSentences: function (count) {
		var me = this,
			list = '',
			sentence, wordCount, i;

		for (i=0; i<count; i++) {
			wordCount = this.random(me.sentenceMin, me.sentenceMax);
			sentence = me.generateWords(wordCount);
			sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
			list += i===0 ? sentence : ' ' + sentence;
		}
		return list;
	},

	/**
	 * Generates list of paragraphs
	 * @param {Number} count The number of paragraphs to generate
	 * @return {String}
	 */
	generateParagraphs: function (count) {
		var me = this,
			list = '',
			paragraph, sentenceCount, i;

		for (i=0; i<count; i++) {
			sentenceCount = me.random(me.paragraphMin, me.paragraphMax);
			paragraph = me.generateSentences(sentenceCount);
			list += i===0 ? paragraph : '\r\n\r\n' + paragraph;
		}
		return list;
	}
});
