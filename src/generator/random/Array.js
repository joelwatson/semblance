Ext.define('Semblance.generator.random.Array', {
	extend: 'Semblance.generator.Base',
	alias: 'semblance.random.array',
	isTemplatable: false,
	data: function () {
		var me = this,
			len = me.items ? me.items.length : 0,
			idx = me.random(0, len-1);

		return len >=0 ? me.items[idx] : null;
	} 
});
