angularApp.service('HipiService', function($http, $q) {
  return {
    'getTodos': function() {
      var defer = $q.defer();
      $http.get('/hipi/getTodos').then(function onSuccess(resp){
        defer.resolve(resp);
      }).catch( function onError(err) {
        defer.reject(err);
      }).finally(function eitherWay(){

      });
      return defer.promise;
    },
    'addTodo': function(todo) {
      var defer = $q.defer();
      $http.post('/hipi/addTodo', todo).then(function onSuccess(resp){
        defer.resolve(resp);
      }).catch( function onError(err) {
        defer.reject(err);
      }).finally(function eitherWay(){

      });
      return defer.promise;
    },
    'removeTodo': function(todo) {
      var defer = $q.defer();
      $http.post('/hipi/removeTodo', todo).then(function onSuccess(resp){
        defer.resolve(resp);
      }).catch( function onError(err) {
        defer.reject(err);
      }).finally(function eitherWay(){

      });
      return defer.promise;
    }
}});