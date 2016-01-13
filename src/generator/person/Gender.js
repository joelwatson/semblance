Ext.define('Semblance.generator.person.Gender', {
    extend: 'Semblance.generator.Base',
    requires: [
        'Semblance.generator.person.FirstName'
    ],
    alias: 'semblance.person.gender',
    type: 'gender',
    data: function () {
        var me = this,
            firstName = me.getContext().getGenerator('person.firstname'),
            last = firstName.getLastValue();

        return firstName.getGender(last);
    }
});
