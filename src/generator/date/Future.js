Ext.define('Semblance.generator.date.Future', {
	extend: 'Semblance.generator.date.Between',
	alias: 'semblance.date.future',
	defaultMaxYears: 100,
	data: function (maxYears, format) {
		var me = this,
			maxYears = maxYears || me.defaultMaxYears,
			min = Ext.Date.add(new Date(), Ext.Date.DAY, 1),
			max = Ext.Date.add(new Date(), Ext.Date.YEAR, maxYears);

		return me.callParent([min, max, format]);
	}
});
