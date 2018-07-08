const app = angular.module('TodoApp', []);

app.controller('TodoController', ['$http', function($http){
  const self = this;
  
  // create an api helper function to save code
  self.apiCall = function(url, method, data){
    return $http({
      url: url,
      method: method,
      data: data
    })
    .then(function(res){
      return res.data;
    })
    .catch(function(err){
      console.log(err);
    });
  }

  // more specific api calls
  self.getTodos = function(){
    self.apiCall('/todos', 'GET')
      .then(function(todos){
        self.todos = todos;
      })
  }

  self.addTodo = function(todo){
    if(self.newTodo && self.newTodo.text){
      self.apiCall('/todos', 'POST', todo)
        .then(self.getTodos);  
      self.newTodo = {}; // resets inputs 
    } else {
      self.error = true;
    }
  }

  self.updateTodo = function(todo){
    self.apiCall(`/todos/${todo._id}`, 'PUT', todo)
      .then(self.getTodos);
  }

  self.deleteTodo = function(event, id){
    event.stopPropagation();
    self.apiCall(`/todos/${id}`, 'DELETE')
      .then(self.getTodos);
  }


  self.toggleTodo = function(todo){
    todo.complete = !todo.complete;
    self.updateTodo(todo);
  }

  self.removeError = function(){
    self.error = false;
  }

  // get todos on load
  self.getTodos();

}])