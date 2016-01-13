Ext.define('Semblance.generator.date.Birthdate', {
    extend: 'Semblance.generator.date.Between',
    alias: 'semblance.date.birthdate',
    defaultMinAge: 0,
    defaultMaxAge: 92,
    data: function (minAge, maxAge, format) {
        var me = this,
            minAge = minAge || me.defaultMinAge,
            maxAge = maxAge || me.defaultMaxAge,
            min = Ext.Date.subtract(new Date(), Ext.Date.YEAR, minAge),
            max = Ext.Date.subtract(new Date(), Ext.Date.YEAR, maxAge);

        return me.callParent([min, max, format]);
    }
});
