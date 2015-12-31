Ext.define('Semblance.generator.geo.address.Street', {
	extend: 'Semblance.generator.Base',
	requires: [
		'Semblance.generator.geo.address.Name',
		'Semblance.generator.geo.address.Number',
		'Semblance.generator.geo.address.Direction',
		'Semblance.generator.geo.address.Type'
	],
	alias: 'semblance.geo.address.street',
	data: function () {
		var me = this,
			context = me.getContext(),
			name = me.api.geo.address.name(context),
			number = me.api.geo.address.number(context),
			type = me.api.geo.address.type(context),
			direction = me.api.geo.address.direction(context);

		return Ext.String.format('{0} {1} {2} {3}', number, direction, name, type);
	}
});
