const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    _id: { type: Number, required: true, unique: true },
    clientName: { type: String, required: true },
    pointOfContact: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    orderRequest: { type: [String], required: true }
});

const Book = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
