'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('NewsController', ['$scope', 'News', function($scope, News) {
    $scope.news = News.query();
}]);

appControllers.controller('GalleryController', ['$scope', function($scope) {

}]);

appControllers.controller('PricingController', ['$scope', 'Room', function ($scope, Room) {
    $scope.rooms = Room.query();
}]);

appControllers.controller('ContactController', ['$scope', function($scope) {

}]);
