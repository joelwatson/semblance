Ext.define('Semblance.generator.List', {
    extend: 'Semblance.generator.Base',
    items: [],
    data: function () {     
        return this.getRandomItem();
    },

    /**
     * Retreives random item from collection
     * Item will be removed until the list is exhausted to guarantee unique values
     */
    getRandomItem: function () {
        var items = this.availableItems,
            min = 0,
            max = items.length,
            idx, item;

        if (max) {
            idx = Math.floor(Math.random() * (max-min) + min);
            item = items[idx];
            Ext.Array.remove(items, item);
        }
        // if we don't have any available items, we need to start over
        else {
            this.availableItems = Ext.Array.clone(this.items);
            // re-call this method
            item = this.getRandomItem();
        }
        return item;
    },

    constructor: function (config) {
        this.availableItems = Ext.Array.clone(this.items);
        this.callParent(arguments);
    }
});
