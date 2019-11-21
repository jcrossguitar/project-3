const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const viewOrderSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  clientName: { type: String, required: true },
  pointOfContact: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  orderRequest: { type: [String], required: true },
  date: { type: Date, default: Date.now}
});

const viewOrder = mongoose.model("ViewOrder", viewOrderSchema);

module.exports = viewOrder;
