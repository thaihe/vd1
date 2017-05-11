module.exports = {
  getTodos: function(next) {
    Hipi.find().exec(function(err, todos) {
      if(err) throw err;
      next(todos);
    });
  },
  addTodo: function(todoVal, next) {
    Hipi.create({value: todoVal}).exec(function(err, todo) {
      if(err) throw err;
      next(todo);
    });
  },
  removeTodo: function(todoVal, next) {
    Hipi.destroy({value: todoVal}).exec(function(err, todo) {
      if(err) throw err;
      next(todo);
    });
  }
};