const app = angular.module('TodoApp', []);

app.controller('TodoController', ['$http', function($http){
  const self = this;
  
  const apiCall = function(url, type, data){
    return $http({
      url: url,
      type: type,
      data: data
    })
    .then(function(res){
      return res.data;
    })
    .catch(function(err){
      console.log(err);
    });
  }

  self.getTodos = function(){
    apiCall('/todos', 'GET')
      .then(function(todos){
        self.todos = todos;
      })
  }

  self.addTodo = function(todo){
    apiCall('/todos', 'POST', todo)
      .then(self.getTodos);
  }

  self.updateTodo = function(todo){
    apiCall(`/todos/${todo._id}`, 'PUT', todo)
      .then(self.getTodos);
  }

  self.deleteTodo = function(id){
    apiCall(`/todos/${id}`, 'DELETE')
      .then(self.getTodos);
  }




}])