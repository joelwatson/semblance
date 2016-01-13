Ext.define('Semblance.generator.Index', {
    extend: 'Semblance.generator.Base',
    alias: 'semblance.index',
    data: function (start) {
        start = Number(start) || 0;
        return start + this.getContext().index;
    }
});
