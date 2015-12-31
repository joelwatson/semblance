Ext.define('Semblance.Parser', {
	singleton: true,

	argRe: /\((.*?)\)/,
	tplReplaceRe: /\{\{[a-z0-9.]+(\(.*?\))?\}\}/i,
	fnRe: /\{\{([a-z0-9.]+)(\(.*?\))?\}\}/i,
	splitRe: /,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/g,

	/**
	 * Parses the passed template into a data object
	 * @param {Object} tpl The template object to parse
	 * @return {Array/Object}
	 */
	parse: function (tpl, context, chain) {
		var me = this, 
			needsContext = !context;

		// if we don't have a context, let's make one (cuz we'll need it)
		if (!Ext.isArray(tpl) && needsContext) {
			// for an iteration, we always need a new context
			context = new Semblance.Context();
		}
		
		// array
		if (Ext.isArray(tpl)) {
			// repeater template
			if(me.isRepeater(tpl)) {
				tpl = this.parseRepeat(tpl);
			}
			// arbitrary user array
			else {
				tpl = this.parseArray(tpl);
			}
		}
		// arbitrary user object
		else if (Ext.isObject(tpl)) {
			if (!chain) {
				chain = [];
			}

			tpl = me.parseObject(tpl, context, chain);
		}
		// lowest-level string property or function call
		else {
			if(Ext.isString(tpl)) {
				tpl = me.parseString(tpl, context);
			}
			if(Ext.isFunction(tpl)) {
				// call the user-defined method, passing the context data and index
				tpl = me.parseFunction(tpl, context);
			}				
		}

		return tpl;
	},

	/**
	 * Determines whether or not the passed tpl is the start of a repeater template
	 * @param {Any} tpl
	 * @return {Boolean}
	 */
	isRepeater: function (tpl) {
		var item = tpl[0],
			regex,
			alias;

		if(Ext.isString(item)) {
			regex = new RegExp('\{\{([^}]+)\}\}', 'gi');
			if(regex.test(item)) {
				alias = this.parseAlias(item);
				return alias==='repeat';
			}			
		}

		return false;
	},

	/**
	 * Executes the template in the given context
	 * @param {String} tpl The template to execute
	 * @param {Semblance.Context} context The context in which to execute the template
	 * @return {Array/Object/String}
	 */
	executeTemplate: function (tpl, context) {
		var alias = this.parseAlias(tpl);
			args = this.parseArguments(tpl);

		return context.getData(alias, args);
	},

	/**
	 * Parses a repeater
	 * @private
	 * @param {Object} tpl The template object to repeat
	 * @return {Array}
	 */
	parseRepeat: function (tpl) {
		var data = [],
			context,
			obj, i, item, reps, properties;

		if (tpl.length <2) {
			//<debug>
            Ext.Error.raise('The repeat array must have two elements, the repeat template and the object being repeated.');
            //</debug>
			return false;
		}
		// for an iteration, we always need a new context
		context = new Semblance.Context();
		// loop over repetition template
		for (i=0; i<2; i++) {
			item = tpl[i];
			// first argument should be repetition statement
			if (i===0) {
				reps = this.executeTemplate(item, context);
			}
			// second argument should be object to repeat
			if (i===1) {
				if(Ext.isObject(item)) {
					properties = item;
				}
				else {
					//<debug>
		            Ext.Error.raise('The second argument for repeat must be object');
		            //</debug>
					return false;
				}
			}
		}
		
		for (i=0; i<reps; i++) {
			context.index = i;
			// for each repetition we need to reset the data which the context is tracking since it's not needed anymore
			context.resetData();

			data.push(this.parseObject(properties, context, []));
		}
		
		context.destroy();

		return data;
	},

	/**
	 * Parses a user-defined function
	 * @private
	 * @param {Function} tpl The function to execute
	 * @return {Any}
	 */
	parseFunction: function (tpl, context) {
		var api = Semblance.Api,
			result;

		result = tpl.call(context.data, api, context.index);

		return result;
	},

	/**
	 * Parses a string template or value
	 * @private
	 * @param {String} tpl The string or template to parse
	 * @return {Any}
	 */
	parseString: function (tpl, context) {
		var me = this,
			regex = new RegExp('\{\{([^}]+)\}\}', 'gi'),
			matches = tpl.match(regex),
			len = matches ? matches.length : 0,
			data, match, i, result;

		for (i=0; i<len; i++) {
			match = matches[i];
			data = me.executeTemplate(match, context);
			// if string is composed of multiple replacers, we need to use replace to swap out the token with the actual value
			// this means, of course, that the result has to be a string
			if (len > 1) {
				tpl = tpl.replace(me.tplReplaceRe, data);
			}
			// if we have only one replacer, we can defer to the data type returned from the generator
			else {
				tpl = data;
			}
		}

		return tpl;		
	},

	/**
	 * Parses an array
	 * @private
	 * @param {Array} tpl The array to parse
	 * @return {Array}
	 */
	parseArray: function (tpl, context) {
		var me = this,
			items = [],
			len = tpl.length,
			i;

		for (i=0; i<len; i++) {
			items.push(me.parse(tpl[i], context));
		}

		return items;
	},

	/**
	 * Parses a template object
	 * @private
	 * @param {Object} tpl The template object to parse
	 * @return {Object}
	 */
	parseObject: function (tpl, context, chain) {
		var obj = {},
			localChain,
			key, value, chainable;

		// the only time we wouldn't have a context is if no iterator was used as the base object passed to the parser
		// in this scenario, we'll just create a context
		if (!context) {
			//context = new Semblance.Context();
		}

		for (key in tpl) {
			value = tpl[key];
			chainable = Ext.isObject(value);
			
			if (chainable) {
				localChain = Ext.clone(chain);
				localChain.push(key);
			}

			obj[key] = this.parse(value, context, localChain || chain);
			
			if (!chainable) {
				context.updateData(key, obj[key], chain);
			};			
		}

		return obj;
	},

	/**
	 * Determines the alias of the generator that should be used to process the template
	 * @private
	 * @param {String} tpl The template string
	 * @return {String}
	 */
	parseAlias: function (tpl) {
		var match = tpl.match(this.fnRe);
		
		if (match.length) {
			return match[1].toLowerCase();
		}
	},

	/**
	 * Parses the arguments of a template method
	 * @private
	 * @param {String} tpl The template string
	 * @return {Array}
	 */
	parseArguments: function (tpl) {
		var args = [],
			match = this.argRe.exec(tpl),
			list, cleaned;

		if (match && match[1]) {
			list = match[1].split(this.splitRe);
			args = Ext.Array.map(list, function(item, index) {
				cleaned = Ext.String.trim(item);
				cleaned = cleaned.replace(/\"$|^\"/g, '');
				return cleaned;
			});
		}
		return args;
	}
});
