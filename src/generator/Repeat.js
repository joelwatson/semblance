Ext.define('Semblance.generator.Repeat', {
	extend: 'Semblance.generator.Base',
	alias: 'semblance.repeat',
	defaultMin: 0,
	data: function (min, max) {
		var me = this,
			min = Number(min || me.defaultMin),
			max = Number(max || min);

		return Math.floor(Math.random() * (max - min + 1) + min);
	}
});
