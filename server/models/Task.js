const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "",
  },

  completed: {
    type: Boolean,
    default: false,
  },

  userId: {
    type: String,
    required: true,
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model("Task", taskSchema);