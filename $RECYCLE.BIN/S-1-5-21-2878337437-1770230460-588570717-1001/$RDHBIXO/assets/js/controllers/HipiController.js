angularApp.controller('HipiController', ['$scope', '$rootScope', 'HipiService', function($scope, $rootScope, HipiService) {
  $scope.formData = {};
  $scope.todos = [];

  HipiService.getTodos().then(function(response) {
    console.log(response);
    $scope.todos = response;
  });  

  $scope.addTodo = function() {
    console.log($scope.formData);
    HipiService.addTodo($scope.formData).then(function(response) {
      console.log(response);
      if (!Array.isArray($scope.todos)){
        $scope.todos = [];
      }
      $scope.todos.push($scope.formData);
      $scope.formData = {};
    });
  }

  $scope.removeTodo = function(todo) {
    console.log(todo);
    HipiService.removeTodo(todo).then(function(response) {
      console.log(response);
      $scope.todos.splice($scope.todos.indexOf(todo), 1);      
    });
  }
  
}]);