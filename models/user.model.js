const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: Number,
  name: String,
  username: String,
  email: String,
  address: Object,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
