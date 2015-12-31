/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Generator.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onBoxReady: function (panel, eOpts) {
        var view = this.getView(),
            inputTextarea = this.lookupReference('input_textarea').child(),
            inputEl = inputTextarea.getEl(),
            inputHeight = inputTextarea.getHeight(),
            inputWidth = inputTextarea.getWidth(),
            outputTextarea = this.lookupReference('output_textarea').child(),
            outputEl = outputTextarea.getEl(),
            outputHeight = outputTextarea.getHeight(),
            outputWidth = outputTextarea.getWidth(),
            icm, ocm, doc;
        
        icm = this.icm = CodeMirror.fromTextArea(inputEl.dom, {
            lineNumbers: true,
            theme: 'monokai',
            indentUnit: 4,
            style: 'font-weight:bold;'
        });
        icm.setSize('100%', '100%');
        //icm.setValue('parse(\n\t\n);');
        
        doc = icm.getDoc();
        doc.markText({line: 0, ch:0}, {line: 0}, {
            readOnly: true,
            atomic: true,
            inclusiveLeft: true,
            inclusiveRight: true
        });

        doc.markText({line: 2, ch:0}, {line: 2}, {
            readOnly: true,
            atomic: true,
            inclusiveLeft: true,
            inclusiveRight: true
        });

        ocm = this.ocm = CodeMirror.fromTextArea(outputEl.dom, {
            lineNumbers: true,
            theme: 'monokai',
            indentUnit: 4
        });
        ocm.setSize('100%', '100%');

        // call the first example
        this.example2();
        this.markEditorBoundaries();
        this.generate();
    },

    onMenuItemClick: function(btn, e, eOpts) {
        var me = this,
            example = btn.example,
            fn = 'example' + example;

        this[fn](this);
        this.markEditorBoundaries();
        this.generate();
    },

    markEditorBoundaries: function() {
        var icm = this.icm,
            doc = icm.getDoc(),
            lineCount = icm.lineCount();

        doc.markText({line: 0, ch:0}, {line: 0}, {
            readOnly: true,
            atomic: true,
            inclusiveLeft: true,
            inclusiveRight: true
        });

        doc.markText({line: lineCount-1, ch:0}, {line: lineCount-1}, {
            readOnly: true,
            atomic: true,
            inclusiveLeft: true,
            inclusiveRight: true
        });
    },

    example1: function() {
        var icm = this.icm,
            ocm = this.ocm,
            doc = icm.getDoc();

        icm.setValue('parse(\n\t\n);');
        ocm.setValue('');
    },

    example2: function() {
        var icm = this.icm,
            ocm = this.ocm,
            doc = icm.getDoc(),
            template;

        template = ['{{repeat(25)}}', {
            city: '{{geo.city}}'
        }];

        icm.setValue('parse(\n\t' + JSON.stringify(template, null, 4) + '\n);');
        ocm.setValue('');
    },

    example3: function() {
        var icm = this.icm,
            ocm = this.ocm,
            doc = icm.getDoc(),
            template;

        template = {
                firstname: '{{person.firstname("male")}}',
                lastname: '{{person.lastname}}',
                company: '{{company}}',
                gender: '{{person.gender}}',
                ssn: '{{person.ssn}}',
                phone: '{{phone.number}}',
                email: '{{web.email}}'
            };

        icm.setValue('parse(\n\t' + JSON.stringify(template, null, 4) + '\n);');
        ocm.setValue('');
    },

    example4: function() {
        var icm = this.icm,
            ocm = this.ocm,
            doc = icm.getDoc(),
            template;

        template = {
                address: '{{geo.address.street}}',
                city: '{{geo.city}}',
                state: '{{geo.state(true)}}',
                postalcode: '{{geo.postalcode}}'
            };

        icm.setValue('parse(\n\t' + JSON.stringify(template, null, 4) + '\n);');
        ocm.setValue('');
    },

    generate: function() {
        var me = this, 
            input = me.icm,
            output = me.ocm,
            lineCount = input.lineCount(),
            value = Ext.String.trim(input.getRange({line: 0}, {line: lineCount-2})),
            outputVal;

        if(!Ext.isEmpty(value)) {
            outputVal = Semblance.Parser.parse(eval('(' + value + ')'));
            output.setValue(JSON.stringify(outputVal, null, 4));
        }
        else {
            Ext.Msg.alert('Attention', 'Please enter a template');
        }
    },

    onGenerateBtnClick: function (btn, e, eOpts) {
        this.generate();
    }
});
