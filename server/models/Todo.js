const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: 'Please enter a todo'
  },
  complete: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Todo', todoSchema);