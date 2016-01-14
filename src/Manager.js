Ext.define('Semblance.Manager', {
    singleton: true,
    requires: ['Ext.util.TaskManager'],
    names: [],
    aliasMap: {},
    queue: {},
    queueTask: null,

    /**
     * Register a generator with the Manager; it will be added to the queue for processing
     * @param {Object} data 
     */
    register: function (data) {
        var me = this,
            aliases = Ext.isArray(data.alias) ? data.alias : data.alias ? [data.alias] : null,
            name = data.$className,
            len = aliases ? aliases.length : 0,
            i;

        if (len) {
            this.names.push(name);
        }

        for (i=0; i<len; i++) {
            this.queue[aliases[i]] = this.aliasMap[aliases[i]] = data.$className;
        }

        if (!me.queueTask) {
            me.queueTask = Ext.util.TaskManager.start({
                run: me.processQueue,
                interval: 100,
                repeat: 100,
                fireOnStart: true,
                scope: me
            });
        }       
    },

    /**
     * Processes the current state of the queue. If the Api is ready, it will initialize the generators for use
     */
    processQueue: function () {
        var me = this,
            key, keys, len, i;

        if (Semblance.Api) {
            keys = Ext.Object.getKeys(me.queue);
            len = keys.length;

            for (i=0; i<len; i++) {
                key = keys[i];
                // register the generator
                Semblance.Api.registerGenerator(me.queue[key]);
                // now delete from queue
                delete me.queue[key];
            }
            // if we've finished processing the queue, stop the task
            if (Ext.Object.isEmpty(me.queue) && me.queueTask) {
                Ext.util.TaskManager.stop(me.queueTask);
                me.queueTask = null;
            }
        }
        else {
            return false;
        }
    }
});
