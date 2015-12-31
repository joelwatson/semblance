Ext.define('DataGenerator.template.FirstName', {
	extend: 'DataGenerator.template.Base',
	type: 'firstName',
	maleNames: ['Abe', 'Ben', 'Carson', 'Dale', 'Ephraim', 'George', 'Henry'],
	femaleNames: ['Alice', 'Bonnie', 'Carli', 'Dorothy', 'Emily', 'Grace', 'Heidi'],
	firstName: function (gender) {
		var me = this,
			gender = gender ? this.parseGender(gender.toLowerCase()) : 'all';
		
		return this.getRandomName(gender);
	},
	getRandomName: function (gender) {
		var names = this.availableNames[gender],
			min = 0,
			max = names.length,
			idx, name;

		if (max) {
			idx = Math.floor(Math.random() * (max-min) + min);
			name = names[idx];
			Ext.Array.remove(names, name);
		}
		// if we don't have any available names, we need to start over
		else {
			this.availableNames[gender] = Ext.Array.clone(this[gender + 'Names']);
			// re-call this method
			name = this.getRandomName(gender);
		}
		return name;
	},
	parseGender: function (gender) {
		if(Ext.Array.contains(['male', 'm'], gender)) {
			return 'male';
		}
		if(Ext.Array.contains(['female', 'f'], gender)) {
			return 'female';
		}
	},
	initNames: function () {
		this.allNames = Ext.Array.union(this.maleNames, this.femaleNames);
		this.availableNames = {
			all: Ext.Array.clone(this.allNames),
			male: Ext.Array.clone(this.maleNames),
			female: Ext.Array.clone(this.femaleNames)
		};
	}
}, function () {
	this.prototype.initNames();
});
