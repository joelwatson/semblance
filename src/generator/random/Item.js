Ext.define('Semblance.generator.random.Item', {
    extend: 'Semblance.generator.Base',
    alias: 'semblance.random.item',
    data: function () {
        var len = arguments.length;
        
        return len ? arguments[this.random(0, len-1)] : null;
    } 
});
