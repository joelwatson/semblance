Ext.define('Semblance.generator.date.Past', {
	extend: 'Semblance.generator.date.Between',
	alias: 'semblance.date.past',
	defaultMaxYears: 100,
	data: function (maxYears, format) {
		var me = this,
			maxYears = maxYears || me.defaultMaxYears,
			min = Ext.Date.subtract(new Date(), Ext.Date.YEAR, maxYears),
			max = Ext.Date.subtract(new Date(), Ext.Date.DAY, 1);

		return me.callParent([min, max, format]);
	}
});
