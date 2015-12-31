Ext.define('DataGenerator.template.Repeat', {
	extend: 'DataGenerator.template.Base',
	type: 'repeat',
	defaultMin: 0,
	defaultMax: 10,
	repeat: function (min, max) {
		var me = this,
			min = min || me.defaultMin,
			max = max || me.defaultMax;
		
		return Math.floor(Math.random() * (max-min) + min);
	}
});
