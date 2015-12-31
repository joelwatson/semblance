Ext.define('Semblance.generator.person.SSN', {
	extend: 'Semblance.generator.Base',
	alias: 'semblance.person.ssn',
	data: function () {
		var me = this,
			part1 = me.randomFln(3, '123456'),
			part2 = me.randomFln(2),
			part3 = me.randomFln(4);

		return Ext.String.format('{0}-{1}-{2}', part1, part2, part3);
	}
});
