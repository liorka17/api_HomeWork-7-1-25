const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Oid: Number,
    CustomerName: String,
    Items: Array,
    Total: Number,
    Date: { type: Date, default: Date.now }
});

const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = OrderModel;
