'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('MainController', ['$scope','$translate', function($scope, $translateProvider) {
    var switchLocale = function (localeKey) {
        $translateProvider.use(localeKey);
    };

    $scope.switchToPL = function () {
        switchLocale('pl');
    };
    $scope.switchToEN = function(){
        switchLocale('en');
    };
}]);

appControllers.controller('LandingController', ['$scope', function($scope) {
    $scope.init = function() {
        $(function () {
            $('.fotorama').fotorama();
        });
    }
}]);

appControllers.controller('GalleryController', ['$scope', function($scope) {
    $scope.init = function() {
        $(function () {
            $('.fotorama').fotorama();
        });
    }
}]);

appControllers.controller('PricingController', ['$scope', 'Room', function ($scope, Room) {
    $scope.rooms = Room.query();
}]);

appControllers.controller('ContactController', ['$scope', function($scope) {

}]);

appControllers.controller('NotFoundController', ['$scope', function($scope) {

}]);
