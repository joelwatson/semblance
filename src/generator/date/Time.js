Ext.define('Semblance.generator.date.Time', {
	extend: 'Semblance.generator.date.Between',
	alias: 'semblance.date.time',
	data: function (meridiem) {
		if (meridiem) {
			return this.callParent([null, null, 'g:i A']); 
		}
		else {
			return this.callParent([null, null, 'H:i']); 
		}
	}
});
