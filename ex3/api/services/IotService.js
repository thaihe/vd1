/**
 * IotService
 *
 * @description :: init service for all devices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Service
 */

module.exports = {
  	start: function (options, done) {
	    sails.iot.devices.Led1.blink();
	    sails.iot.devices.Led2.blink();
	    sails.iot.devices.Led3.blink();
  	}
 }
