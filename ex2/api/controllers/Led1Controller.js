/**
 * Led1Controller
 *
 * @description :: Server-side logic for managing leds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  	blink: function (req, res) {
  		      sails.iot.devices.Led1.blink();
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

