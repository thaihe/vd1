var Gpio = require('onoff').Gpio,
    led1 = new Gpio(2, 'out');
    led2 = new Gpio(3, 'out');
	led3 = new Gpio(4, 'out');
var iv = setInterval(function(){
led1.writeSync(led1.readSync() === 0 ? 1 : 0);
led2.writeSync(led2.readSync() === 0 ? 1 : 0);
led3.writeSync(led3.readSync() === 0 ? 1 : 0);
}, 500);
/* 
// Stop blinking the LED and turn it off after 5 seconds.
setTimeout(function() {
    clearInterval(iv); // Stop blinking
    led.writeSync(0);  // Turn LED off.
    led.unexport();    // Unexport GPIO and free resources
}, 5000); */