/**
 * HipiController
 *
 * @description :: Server-side logic for managing rpigpios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /*
	pin7: function (req, res){
        
        var gpio = require('rpi-gpio');
        gpio.setup(7, gpio.DIR_IN, readInput);
        function readInput() {
            gpio.read(7, function(err, value) {
                console.log(err);
                console.log('The value is ' + value);
                res.send('The value is ' + value);
            });
        }  
        
        // return res.send('Hi there!');
    }
    */

    getTodos: function(req, res) {
        HipiService.getTodos(function(todos) {
            res.json(todos);
        });
    },
    addTodo: function(req, res) {
        var todoVal = (req.body.value) ? req.body.value : undefined
        HipiService.addTodo(todoVal, function(success) {
            res.json(success);
        });
    },
    removeTodo: function(req, res) {
       var todoVal = (req.body.value) ? req.body.value : undefined
        HipiService.removeTodo(todoVal, function(success) {
            res.json(success);
        });
    }
};

