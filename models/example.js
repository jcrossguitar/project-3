const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
    _id: { type: Number, required: true, unique: true },
    clientName: { type: String, required: true },
    pointOfContact: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    orderRequest: { type: [String], required: true }
});

const Example = mongoose.model("Inventory", exampleSchema);

module.exports = Example;