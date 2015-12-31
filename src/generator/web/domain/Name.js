Ext.define('Semblance.generator.web.domain.Name', {
	extend: 'Semblance.generator.Base',
	requires: [
		'Semblance.generator.web.domain.Extension',
		'Semblance.generator.Company'
	],
	alias: 'semblance.web.domain.name',
	data: function () {
		var me = this,
			context = me.getContext(),
			company = me.api.company(context),
			extension = me.api.web.domain.extension(context);

		return company.toLowerCase() + '.' + extension;
	}
});
