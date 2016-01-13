Ext.define('Semblance.generator.date.Between', {
    extend: 'Semblance.generator.Base',
    alias: 'semblance.date.between',
    defaultMin: new Date(1970, 0, 1),
    defaultMax: new Date(),
    data: function (min, max, format) {
        var me = this,
            minDate = min ? new Date(min) : null,
            maxDate = max ? new Date(max) : null,
            min = minDate && Ext.isDate(minDate) ? minDate : me.defaultMin,
            max = maxDate && Ext.isDate(maxDate) ? maxDate : me.defaultMax,
            minTime = min.getTime(),
            maxTime = max.getTime(),
            diff = (maxTime - minTime) * Math.random(),
            date = new Date(minTime + diff);

        return format ? Ext.Date.format(date, format) : date;
    }
});
