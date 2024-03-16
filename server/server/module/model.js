const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
const User = mongoose.model("subscriber", subscribeSchema);
module.exports = User;
