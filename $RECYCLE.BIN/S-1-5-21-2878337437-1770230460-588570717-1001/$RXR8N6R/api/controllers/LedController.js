/**
 * LedController
 *
 * @description :: Server-side logic for managing leds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  	index: function (req, res) {
		// test git
    	return res.view('ledcontrol');
  	}
};

