const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
   Name:{ type: String, required: ["this field is required"]},
   Phone:{ type: String, required: ["this field is required"]},
   Email:{ type: String, required: ["this field is required"]},
  },
  { timestamps: true }
);

const User = mongoose.model("Users", UserSchema);

module.exports = User;
