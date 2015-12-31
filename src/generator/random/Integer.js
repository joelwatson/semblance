Ext.define('Semblance.generator.random.Integer', {
	extend: 'Semblance.generator.Base',
	alias: 'semblance.random.integer',
	defaultMin: 0,
	defaultMax: 10,
	data: function (min, max, format) {
		var me = this,
			min = Number(min || me.defaultMin),
			max = Number(max || me.defaultMax),
			value = Ext.Number.randomInt(min, max);

		return format ? Ext.util.Format.number(value, format) : value;
	}
});
