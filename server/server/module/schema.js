const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    // unique: true,
    maxlength: [20, "name can not be more than 20 chaeracters"],
  },
  email: {
    type: String,
    unique: true,
  },
  description: String,
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
