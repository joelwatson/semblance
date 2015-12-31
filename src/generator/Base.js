Ext.define('Semblance.generator.Base', {
	requires: ['Semblance.Context'],
	isTemplate: true,
	isTemplatable: true,
	config: {
		lastValue: null,
		context: null
	},
	constructor: function (config) {
		var me = this;
		
		me.initConfig(config);

		if(!me.getContext()) {
			me.setContext(new Semblance.Context());
		}
		
		me.api = Semblance.Api;
		me.callParent(arguments);
	},
	
	destroy: function() {
		this.setContext(null);
		this.callParent();
	},

	/**
	 * For tpl methods, all args are strings, so this will evaluate them to booleans
	 * @param {String} input
	 * @return {Boolean}
	 */
	stringToBoolean: function (input) {
		var falsy = input === 'false' || input === '0';

		return falsy ? false : !!input;
	},

	/**
	 * Returns a random integer between given ranges
	 * @param {Number} min
	 * @param {Number} max
	 * @return {Number}
	 */
	random: function (min, max) {
		if(!max) {
			max = min;
		}
		return Ext.Number.randomInt(min, max);
	},

	/**
	 * Returns a random floating point number between given ranges
	 * @param {Number} min
	 * @param {Number} max
	 * @param {String} format The format to apply to the number
	 * @return {Number}
	 */
	randomFloat: function (min, max, fixed) {
		var min = min || 0,
			max = max || 99999,
			fixed = fixed || 2,
			value = (Math.random() * (max-min) + min);

		return Number(Math.round(value+'e'+fixed)+'e-'+fixed);
	},

	/**
	 * Returns a random fixed length number (string)
	 * @param {Number} digits The number of digits that should comprise the string
	 * @param {String} range The range of characters that should comprise the string
	 * @return {String}
	 */
	randomFln: function(digits, range) {
		var range = range || '0123456789',
			number = '',
			i;

		for (i=0; i<digits; i++) {
			number += range.charAt(this.random(0, range.length-1));
		}

		return number;
	},

	/**
	 * Replaces characters in a masked string with random numbers
	 * @param {String} template The template that will have replacements applied
	 * @param {String} character The character that should be replaced in the template
	 * @return {String}
	 */
	replaceCharacterWithNumber: function (template, character) {
		var character = character || '#',
			result = '',
			currentChar, i;

		for(i=0; i<template.length; i++) {
			currentChar = template.charAt(i);

			if (currentChar === character) {
				result += this.random(0, 9);
			}
			else {
				result += currentChar;
			}
		}

		return result;
	}
});
