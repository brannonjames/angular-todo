const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');
const errorHandler = require('./handlers/error');

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/todos', todoRoutes);
app.use(errorHandler);

app.listen(PORT, function(){
  console.log('TODO App running on ', PORT);
})