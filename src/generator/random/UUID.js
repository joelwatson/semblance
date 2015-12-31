Ext.define('Semblance.generator.random.UUID', {
	extend: 'Semblance.generator.Base',
	alias: 'semblance.random.uuid',
	data: function () {
		var pattern = 'xxxxxxxx-xxxx-4xxx-Rxxx-xMxxxxxxxxxx'.split(''),
            hex = '0123456789abcdef'.split(''),
            length = pattern.length,
            parts = [],
            r, c, i;

        for (r, c, i = 0; i < length; ++i) {
            c = pattern[i];

            if (c !== '-' && c !== '4') {
                r = Math.random() * 16;
                r = (c === 'R') ? (r & 3 | 8) : (r | ((c === 'M') ? 1 : 0));
                c = hex[r];
            }

            parts[i] = c;
        }

        return parts.join('');
	}
});
