const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true }
});

const user = mongoose.model("User", userSchema);

module.exports = User;
