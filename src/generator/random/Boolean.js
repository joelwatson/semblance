Ext.define('Semblance.generator.random.Boolean', {
	extend: 'Semblance.generator.Base',
	alias: 'semblance.random.boolean',
	data: function () {
		return Boolean(Math.random()<.5);
	}
});
