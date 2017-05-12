/**
 * Led1Controller
 *
 * @description :: Server-side logic for managing leds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  	blink: function (req, res) {
  		      //sails.iot.devices.Led1.blink();
			  var Gpio = require('onoff').Gpio,
              led1 = new Gpio(2, 'out');
              led2 = new Gpio(3, 'out');
	          led3 = new Gpio(4, 'out');
      blink:  var iv = setInterval(function(){
              led1.writeSync(led1.readSync() === 0 ? 1 : 0);
              led2.writeSync(led2.readSync() === 0 ? 1 : 0);
              led3.writeSync(led3.readSync() === 0 ? 1 : 0);
}, 500);
    	      return res.send('led1 is blink');
  	},

  	off: function(req, res) {
  		sails.iot.devices.Led1.stop().off();
  		return res.send('led is off now!');
  	},

  	on: function(req, res) {
  		sails.iot.devices.Led1.stop().on();
  		return res.send('led is on now!');
  	}
};

