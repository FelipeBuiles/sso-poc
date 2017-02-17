angular.module('exceptionHandler', [])
    .factory('$exceptionHandler', function($log) {
        return function handler(exception, cause) {
            Materialize.toast('Unauthorized')
        }
    })