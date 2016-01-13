Ext.define('Semblance.Api', {
    singleton: true,
    requires: [
        'Semblance.Parser',
        'Semblance.Context',
        'Semblance.generator.*'
    ],
    /**
     * Facade for calling actual API methods on generators
     */
    fake: function () {
        var me = this,
            alias = arguments[0].replace('semblance.', ''),
            methodArgs = me.getMethodArgs(arguments),
            len = methodArgs.length,
            hasContext = me.hasContext(methodArgs),
            finalMethodArgs = hasContext ? methodArgs.slice(0, len-1) : methodArgs,
            context = hasContext ? methodArgs[len-1] : new Semblance.Context(),
            value = context.getData(alias, finalMethodArgs);

        if (!hasContext) {
            // destroy the context
            context.destroy();
        }       

        return value;
    },

    /**
     *
     *
     */
    parse: function (tpl) {
        return Semblance.Parser.parse(tpl);
    },

    /**
     * Determines if collection of arguments contains a context
     * @param {Array} args
     * @return {Boolean}
     */
    hasContext: function (args) {
        var len = args.length,
            last = len ? args[len-1] : null;

        return last && last.isContext;
    },

    /**
     * Gets args to pass to generator data() method
     * @param {Array} args The raw arguments to parse
     * @return {Array}
     */
    getMethodArgs: function (args) {
        var len = args.length,
            methodArgs = [],
            i;

        for(i=1; i<len; i++) {
            methodArgs.push(args[i]);
        }

        return methodArgs;
    },

    /**
     * Registers a generator with the API so a facade method can be bound to fake()
     * @param {String} generator The classname of the generator
     */
    registerGenerator: function (generator) {
        var generator = Ext.ClassManager.get(generator),
            alias = generator.prototype.alias[0],
            parts = alias.split('.'),
            len = parts.length,
            root = this,
            i, part;

        for (i=1; i<len; i++) {
            part = parts[i];
            if (!root.hasOwnProperty(part)) {
                // add object
                if (i<len-1) {
                    root = root[part] = {};
                }
                else {
                    root[part] = this.fake.bind(this, alias);
                }
            }
            else {
                root = root[part];
                if (i===len-1) {
                    root[part] = this.fake.bind(this, alias);
                }
            }
        }
    },

    /**
     * Registers generators with the API so a facade method can be bound to fake()
     * @param {Array} generators
     */
    registerGenerators: function (generators) {
        var i;
        for (i=0; i<generators.length; i++) {
            this.registerGenerator(generators[i]);
        }
    }
 }, function () {
    // Auto register all classes that have the semblance.* alias structure
    this.registerGenerators(Ext.ClassManager.getNamesByExpression('semblance.*'));
 });
