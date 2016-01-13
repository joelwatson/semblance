Ext.define('Semblance.generator.random.Float', {
    extend: 'Semblance.generator.Base',
    alias: 'semblance.random.float',
    defaultMin: 0,
    defaultMax: 10,
    defaultFixed: 4,
    data: function (min, max, fixed, format) {
        var me = this,
            min = Number(min || me.defaultMin),
            max = Number(max || me.defaultMax),
            fixed = Number(fixed || me.defaultFixed),
            value = me.randomFloat(min, max, fixed);

        return format ? Ext.util.Format.number(value, format) : value;
    }
});
