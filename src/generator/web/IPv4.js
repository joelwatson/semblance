Ext.define('Semblance.generator.web.IPv4', {
	extend: 'Semblance.generator.Base',
	alias: 'semblance.web.ipv4',
	data: function () {
		var parts = [],
			i;

		for(i=0; i<4; i++) {
			parts[i] = this.random(0, 255);
		}

		return parts.join('.');
	}
});
