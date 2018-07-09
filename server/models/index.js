const mongoose = require('mongoose');
const Todo = require('./Todo');

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/angular-todo`, { useNewUrlParser: true });

module.exports = {Todo}

