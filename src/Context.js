Ext.define('Semblance.Context', {
	isContext: true,
	generators: null,
	index: 0,
	constructor: function (config) {
		this.generators = new Ext.util.MixedCollection();
		this.resetData();
		this.callParent(arguments);
	},

	/**
	 * Calls template data() method on generator
	 * @param {String} alias Alias of generator to use
	 * @param {Array} args Arguments to pass to template method
	 */
	getData: function (alias, args) {
		var me = this,
			generator = me.getGenerator(alias),
			value = generator.data.apply(generator, args);

		generator.setLastValue(value);

		return value;
	},

	updateData: function (key, value, chain) {
		var len = chain.length,
			root = this.data,
			i, node;

		if (len) {
			for (i=0; i<len; i++) {
				node = chain[i];
				if (!root.hasOwnProperty(node)) {
					root = root[node] = {};
				}
				else {
					root = root[node];
				}
			}
		}

		root[key] = value;
	},

	resetData: function () {
		this.data = {};
	},
	/**
	 * Retrieves the generator instance to use; if it doesn't exist in this Context, create it
	 * @private
	 * @param {String} alias The alias of the generator to retrieve/create
	 * @return {Object}
	 */
	getGenerator: function (alias) {
		var me = this,
			alias = alias.toLowerCase(),
			generator = me.generators.getByKey(alias);
		// if we don't have a generator already created for this context, create one by alias
		if (!generator) {
			generator = Ext.createByAlias('semblance.' + alias, {
				context: me
			});
			me.generators.add(alias, generator);
		}

		return generator;
	},

	destroy: function () {
		var me = this;

		me.generators.each(function(item) {
			item.destroy();
		});
		me.generators.removeAll();
		Ext.destroy(this.generators);
		this.callParent();
	}
});