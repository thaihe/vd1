/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
	sails.iot = {};
	sails.iot.raspi = require('raspi-io');
	sails.iot.five = require('johnny-five');
	sails.iot.board = new sails.iot.five.Board({
	  	io: new sails.iot.raspi()
	});
cb();
	sails.iot.board.on('ready', () => {
		var requireDir = require('require-dir');
		sails.iot.devices = requireDir('./../api/devices');	// require all devices

		sails.iot.board.repl.inject(sails.iot.devices);	// add all device to repl, you can control it in terminal

		

		IotService.start();
	});

  	// It's very important to trigger this callback method when you are finished
  	// with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
};
