const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shippingSchema = new Schema({
    _id: { type: Number, required: true, unique: true },
    clientName: { type: String, required: true },
    pointOfContact: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    orderRequest: { type: [String], required: true }
});

const Shipping = mongoose.model("Shipping", shippingSchema);

module.exports = Shipping;
