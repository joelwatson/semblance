Ext.define('Semblance.generator.web.IPv6', {
	extend: 'Semblance.generator.Base',
	alias: 'semblance.web.ipv6',
	data: function () {
		var hex = "0123456789ABCDEF",
			ip = '',
			i, x;

		for (i=0; i<8; i++) {
			for (x=0; x<4; x++) {
				ip += hex.charAt(Math.round(Math.random()*16)).toLowerCase();
			}
			
        	if (i != 7) {
        		ip += ":";
        	}
    	}	

    	return ip;
	}
});
