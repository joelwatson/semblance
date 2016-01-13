Ext.define('Semblance.generator.geo.Longitude', {
    extend: 'Semblance.generator.Base',
    alias: 'semblance.geo.longitude',
    data: function () {
        return (this.randomFloat(360 * 10000) / 10000.0 - 180.0).toFixed(9);
    }
});
