Ext.define('Semblance.generator.geo.Latitude', {
	extend: 'Semblance.generator.Base',
	alias: 'semblance.geo.latitude',
	data: function () {
		return (this.randomFloat(180 * 10000) / 10000.0 - 90.0).toFixed(9);
	}
});
