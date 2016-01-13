Ext.define('Semblance.generator.web.FileType', {
    extend: 'Semblance.generator.web.MimeType',
    alias: 'semblance.web.filetype',
    data: function () {
        var me = this,
            keys = Ext.Object.getKeys(me.items),
            key = keys[me.random(0, keys.length-1)],
            item = me.items[key],
            len, i;

        if (Ext.isArray(item)) {
            item = item[me.random(0, item.length-1)]
        }

        return item;
    }
});