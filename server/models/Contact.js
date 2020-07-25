const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true},
  author: {type: Schema.Types.ObjectId, ref: "User"}
});

module.exports = model("Contact", schema);
