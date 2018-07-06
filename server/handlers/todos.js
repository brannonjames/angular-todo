const { Todo } = require('../models');

module.exports = {
  getTodos: async function(req, res, next){
    try {
      const todos = await Todo.find()
      res.send(todos);
    } catch(err){
      next(err);
    }
  },

  addTodo: async function(req, res, next){
    try {
      await Todo.create(req.body);
      res.sendStatus(201);
    } catch(err){
      next(err);
    }
  },

  updateTodo: async function(req, res, next){
    try {
      await Todo.findByIdAndUpdate(req.params.id, req.body);
      res.sendStatus(200);
    } catch(err){
      next(err);
    }
  },
  
  deleteTodo: async function(req, res, next){
    try {
      await Todo.findByIdAndRemove(req.params.id);
      res.sendStatus(200);
    } catch(err){
      next(err);
    }
  }
}