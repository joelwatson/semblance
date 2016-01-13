Ext.define('Semblance.generator.web.Email', {
    extend: 'Semblance.generator.Base',
    requires: [
        'Semblance.generator.person.FirstName',
        'Semblance.generator.person.LastName',
        'Semblance.generator.Company'
    ],
    alias: 'semblance.web.email',
    data: function (random) {
        var me = this,
            context = me.getContext(),
            firstName = context.getGenerator('person.firstname'),
            lastName = context.getGenerator('person.lastname'),
            company = context.getGenerator('company'),
            canMakeEmail = false,
            lastFn, lastLn, lastCo, email;

        if (!random) {
            lastFn = firstName.getLastValue();
            lastLn = lastName.getLastValue();
            lastCo = company.getLastValue();
            canMakeEmail = lastFn && lastLn && lastCo;
        }

        if (!canMakeEmail) {
            lastFn = firstName.data();
            lastLn = lastName.data();
            lastCo = company.data();
        }

        email = Ext.String.format('{0}.{1}@{2}.com', lastFn.toLowerCase(), lastLn.toLowerCase(), lastCo.toLowerCase());

        return email;
    }
});
