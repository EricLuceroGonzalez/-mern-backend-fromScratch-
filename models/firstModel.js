const mongoose = require("mongoose");

// 1) Definition of a Schema:
const gasServiceSchema = new mongoose.Schema({
  gasNOcost: { type: Number, required: true, default: 0 },
  gasNFcost: { type: Number, required: true, default: 0 },
  serviceCost: { type: Number, required: true, default: 0 },
  liters: {
    type: Number,
    required: true,
    default: 0
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

// 2) Compile the schema into a model and exports:
module.exports = gasService = mongoose.model("gasService", gasServiceSchema);
