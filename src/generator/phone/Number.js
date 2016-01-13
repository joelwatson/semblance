Ext.define('Semblance.generator.phone.Number', {
    extend: 'Semblance.generator.Base',
    requires: ['Semblance.generator.phone.AreaCode'],
    alias: 'semblance.phone.number',
    defaultFormat: '(xxx) xxx-xxxx',
    data: function (format) {
        var me = this, 
            format = format || me.defaultFormat,
            areaCode = me.api.phone.areacode(me.getContext()),
            phone = areaCode + me.random(400, 600) + me.random(2e3, 4e3),
            index = 0;

        return format.replace(/x/g, function() {
            return phone.charAt(index++)
        });
    }
});
