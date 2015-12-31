Ext.define('Semblance.generator.web.Username', {
	extend: 'Semblance.generator.Base',
	requires: [
		'Semblance.generator.person.FirstName',
		'Semblance.generator.person.LastName'
	],
	alias: 'semblance.web.username',
	data: function () {
		var me = this,
			chars = 'abcdefghijklmnopqrstuvwxyz',
			context = me.getContext(),
			firstName = me.api.person.firstname(context),
			lastName = me.api.person.lastname(context),
			type = me.random(0, 2),
			part1, part2, part3='';

		switch(type) {
			case 0: 
				part1 = firstName;
				part2 = chars.charAt(me.random(0, chars.length-1));
				break;
			case 1:
				part1 = chars.charAt(me.random(0, chars.length-1));
				part2 = lastName;
				break;
			case 2:
				part1 = chars.charAt(me.random(0, chars.length-1));
				part2 = lastName;
				part3 = me.randomFln(2);
			default:
				break;
		}
		return (part1 + part2 + part3).toLowerCase();
	}
});
