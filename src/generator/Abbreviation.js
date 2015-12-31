Ext.define('Semblance.generator.Abbreviation', {
	extend: 'Semblance.generator.Base',
	data: function (abbreviation) {
		var me = this,
			len = me.items.length-1,
			item = me.items[me.random(0, len)];

		return abbreviation ? item.abbr : item.name;
	}
});
