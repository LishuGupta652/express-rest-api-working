const mongoose = require("mongoose");

const formData = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  delaration: {
    type: Boolean,
    required: true,
  },
  audio: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("techwondoe", formData);
