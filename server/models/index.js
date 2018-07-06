const mongoose = require('mongoose');
const Todo = require('./Todo');

mongoose.connect(`mongodb://localhost:27017/angular-todo`, { useNewUrlParser: true });

module.exports = {Todo}

