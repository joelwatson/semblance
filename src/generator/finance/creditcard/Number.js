Ext.define('Semblance.generator.finance.creditcard.Number', {
	extend: 'Semblance.generator.Base',
	requires: ['Semblance.generator.finance.creditcard.Type'],
	alias: 'semblance.finance.creditcard.number',
	formats: {
		'Visa': [
			"4539############",
			"4556############",
			"4916############",
			"4532############",
			"4929############",
			"40240071########",
			"4485############",
			"4716############",
			"4###############"
		],
		'MasterCard': [
			"51##############",
			"52##############",
			"53##############",
			"54##############",
			"55##############"
		],
		'AMEX': [
			"34##############",
			"37##############"
		],
		'Discover': [
			"6011############"
		]
	},
	data: function (card) {
		var me = this,
			card = card || me.api.finance.creditcard.type(me.getContext()),
			formats = me.formats[card],
			len = formats.length,
			format = formats[me.random(0, len-1)];

		return me.replaceCharacterWithNumber(format);
	}
});