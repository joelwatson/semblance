/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Generator.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Generator',
    requires: [
        'DataGenerator.template.Repeat',
        'DataGenerator.template.FirstName'
    ],
    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
        var manager = DataGenerator.Manager;
        var raw = manager.parse(['{{repeat(5, 20)}}', {
            //id: '{{index()}}',
            firstname: '{{firstName()}}'//,
            /*lastname: '{{surname()}}',
            company: '{{company()}}',
            age: '{{integer(20,67)}}',
            created: '{{date()}}',
            active: '{{bool()}}',
            eyeColor: '{{random("blue", "red", "green", "brown")}}',
            children: [
              '{{repeat(2)}}', {
                firstname: '{{firstName()}}'
              }
            ]*/
        }]);



    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
