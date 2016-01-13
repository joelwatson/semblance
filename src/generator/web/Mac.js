Ext.define('Semblance.generator.web.Mac', {
    extend: 'Semblance.generator.Base',
    alias: 'semblance.web.mac',
    data: function () {
        var hex = "0123456789ABCDEF",
            mac = '',
            i;

        for (i=0; i<6; i++) {
            mac += hex.charAt(Math.round(Math.random()*16));
            mac += hex.charAt(Math.round(Math.random()*16));
            if (i != 5) {
                mac += ":";
            }
        }   

        return mac;
    }
});
