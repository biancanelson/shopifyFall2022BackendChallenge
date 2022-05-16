const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    upd:{
        type: Number,
        required: true
    }
});

const InventoryModel = mongoose.model('inventory', inventorySchema);
module.exports = InventoryModel;