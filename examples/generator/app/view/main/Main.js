/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Generator.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Generator.view.main.MainController',
        'Generator.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: 'border',
    items: [{
        xtype: 'panel',
        region: 'north',
        ui: 'navigation',
        header: {
            layout: {
                align: 'stretchmax'
            },
            title: {
                bind: {
                    text: '{name}'
                },
                flex: 0
            },
            iconCls: 'fa-th-list'
        }
    },{
        xtype: 'panel',
        region: 'west',
        layout: 'fit',
        width: 200,
        title: 'Examples',
        items: [{
            xtype: 'menu',
            floating: false,
            items: [{
                text: 'Playground',
                example: 1,
                handler: 'onMenuItemClick'
            },{
                text: 'Repetition',
                example: 2,
                handler: 'onMenuItemClick'
            },{
                text: 'Contact Details',
                example: 3,
                handler: 'onMenuItemClick'
            },{
                text: 'Address',
                example: 4,
                handler: 'onMenuItemClick'
            }]
        }]
    },{
        xtype: 'panel',
        region: 'center',
        tbar: [{
            text: 'Generate!',
            handler: 'onGenerateBtnClick'
        }],
        listeners: {
            boxready: 'onBoxReady'
        },
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'container',
            flex: 1,
            layout: 'fit',
            items: [{
                xtype: 'component',
                autoEl: {
                    tag: 'textarea'
                }
            }],
            reference: 'input_textarea'
        },{
            xtype: 'splitter'
        },{
            xtype: 'container',
            flex: 1,
            layout: 'fit',
            items: [{
                xtype: 'component',
                autoEl: {
                    tag: 'textarea'
                }
            }],
            reference: 'output_textarea'
        }]
    }]

    /*
    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    headerPosition: 'top',

    defaults: {
        tabConfig: {
            iconAlign: 'top',
            textAlign: 'center',
            width: 120
        }
    },

    items: [{
        title: 'Playground',
        iconCls: 'fa-home',
        tbar: [{
            text: 'Generate!',
            handler: 'onGenerateBtnClick'
        }],
        listeners: {
            boxready: 'onBoxReady'
        },
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'container',
            flex: 1,
            layout: 'fit',
            items: [{
                xtype: 'component',
                autoEl: {
                    tag: 'textarea'
                }
            }],
            reference: 'input_textarea'
        },{
            xtype: 'splitter'
        },{
            xtype: 'container',
            flex: 1,
            layout: 'fit',
            items: [{
                xtype: 'component',
                autoEl: {
                    tag: 'textarea'
                }
            }],
            reference: 'output_textarea'
        }]
    }]*/
});
