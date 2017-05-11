angularApp.service('LedService', function($http, $q) {
    return {
        'turnLed': function(ledName, status) {
            var defer = $q.defer();
            var url = '/' + ledName + '/' + (status ? "on" : "off") ;
            $http.get(url).then(function onSuccess(resp){
                defer.resolve(resp);
            }).catch( function onError(err) {
                defer.reject(err);
            }).finally(function eitherWay(){

            });
            return defer.promise;
        },
        'blinkLed': function(ledName, status) {
            var defer = $q.defer();
            var url;
            if (status) {
                url = '/' + ledName + '/blink';
            } else {
                url = '/' + ledName + '/on';
            }
            $http.post(url).then(function onSuccess(resp){
                defer.resolve(resp);
            }).catch( function onError(err) {
                defer.reject(err);
            }).finally(function eitherWay(){

            });
            return defer.promise;
        }
}});