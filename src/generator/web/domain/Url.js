Ext.define('Semblance.generator.web.domain.Url', {
    extend: 'Semblance.generator.web.domain.Name',
    requires: [
        'Semblance.generator.web.domain.Protocol'
    ],
    alias: 'semblance.web.domain.url',
    data: function () {
        var me = this,
            protocol = me.api.web.domain.protocol(me.context),
            domain = me.api.web.domain.name(me.context);

        return protocol + domain;
    }
});
