const mongoose = require("mongoose");

// 1) Definition of a Schema:
const userFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  mail: { type: String, required: true },
  age: { type: Number, required: true },
  comment: {type: String, required: true},
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

// 2) Compile the schema into a model and exports:
module.exports = userForm = mongoose.model("UserForm", userFormSchema);
