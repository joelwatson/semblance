Ext.define('Semblance.generator.geo.address.Mailing', {
    extend: 'Semblance.generator.Base',
    requires: [
        'Semblance.generator.geo.address.Street',
        'Semblance.generator.geo.PostalCode',
        'Semblance.generator.geo.State',
        'Semblance.generator.geo.City'
    ],
    alias: 'semblance.geo.address.mailing',
    data: function () {
        var me = this,
            context = me.getContext(),
            street = me.api.geo.address.street(context),
            state = me.api.geo.state(true, context),
            city = me.api.geo.city(context),
            postalCode = me.api.geo.postalcode(context);

        return Ext.String.format('{0} {1}, {2} {3}', street, city, state, postalCode);
    }
});
