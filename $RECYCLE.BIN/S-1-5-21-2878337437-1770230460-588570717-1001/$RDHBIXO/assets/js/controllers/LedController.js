angularApp.controller('LedController', ['$scope', '$rootScope', 'LedService', function($scope, $rootScope, LedService) {
    $scope.led1 = { on: true, blink: true };
    $scope.led2 = { on: true, blink: true };
    $scope.led3 = { on: true, blink: true };

    // $(".mybox").simpleSwitch();

    $scope.changeLed1On = function() {
        if ( ! $scope.led1.on) {
            $scope.led1.blink = false;
        }
        LedService.turnLed("led1", !$scope.led1.on).then(function(response) {
            console.log(response);
        });
    };

    $scope.changeLed1Blink = function() {
        if ( $scope.led1.blink) {
            $scope.led1.on = true;
        }
        LedService.blinkLed("led1", $scope.led1.blink).then(function(response) {
            console.log(response);
        });
    };

    $scope.changeLed2On = function() {
        if ( ! $scope.led2.on) {
            $scope.led2.blink = false;
        }
        LedService.turnLed("led2", !$scope.led2.on).then(function(response) {
            console.log(response);
        });
    };

    $scope.changeLed2Blink = function() {
        if ( $scope.led2.blink) {
            $scope.led2.on = true;
        }
        LedService.blinkLed("led2", $scope.led2.blink).then(function(response) {
            console.log(response);
        });
    };

    $scope.changeLed3On = function() {
        if ( ! $scope.led3.on) {
            $scope.led3.blink = false;
        }
        LedService.turnLed("led3", !$scope.led3.on).then(function(response) {
            console.log(response);
        });
    };

    $scope.changeLed3Blink = function() {
        if ( $scope.led3.blink) {
            $scope.led3.on = true;
        }
        LedService.blinkLed("led3", $scope.led3.blink).then(function(response) {
            console.log(response);
        });
    };

  
}]);