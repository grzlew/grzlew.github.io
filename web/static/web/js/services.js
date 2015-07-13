'use strict';

var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('Room', ['$resource',
    function($resource){
        return $resource('rooms', {}, {
            query: {method:'GET', isArray:true}
        });
    }]);

appServices.factory('News', ['$resource',
    function($resource){
        return $resource('news', {}, {
            query: {method:'GET', isArray:true}
        });
    }]);

