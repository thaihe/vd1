/**
 * Led3Controller
 *
 * @description :: Server-side logic for managing leds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  	blink: function (req, res) {
  		sails.iot.devices.Led3.blink();
    	return res.send('led is blink now!');
  	},

  	off: function(req, res) {
  		sails.iot.devices.Led3.stop().off();
  		return res.send('led is off now!');
  	},

  	on: function(req, res) {
  		sails.iot.devices.Led3.stop().on();
  		return res.send('led is on now!');
  	}
};

