Ext.define('DataGenerator.template.Base', {

}, function() {
	this.onExtended(function (cls, data) {
		var manager = DataGenerator.Manager,
			type = data.type;

		manager.registerTemplate(data);
	})
});
