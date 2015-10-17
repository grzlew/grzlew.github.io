'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('MainController', ['$scope', '$translate', function ($scope, $translateProvider) {
    var switchLocale = function (localeKey) {
        $translateProvider.use(localeKey);
    };

    $scope.switchToPL = function () {
        switchLocale('pl');
    };
    $scope.switchToEN = function () {
        switchLocale('en');
    };
}]);

appControllers.controller('LandingController', ['$scope', function ($scope) {
    $scope.init = function () {
        $(function () {
            $('.fotorama').fotorama();
        });
    }
}]);

appControllers.controller('GalleryController', ['$scope', function ($scope) {
    $scope.init = function () {
        $(function () {
            $('.fotorama').fotorama();
        });
    }
}]);

appControllers.controller('PricingController', ['$scope', 'Room', function ($scope, Room) {
    this.rooms = Room.query();

    $scope.rooms = this.rooms;
    $scope.options = {width: '100%', height: 400, loop: true, keyboard: true, nav: 'thumbs'};

    var selectRoom = function (roomId) {
        var currentRoom = this.rooms[roomId];
        $scope.currentRoom = currentRoom;

        var gallery = $("#room-fotorama");
        gallery.fotorama({data: currentRoom.images});
        gallery.fotorama.load({data: currentRoom.images});
        };

    $scope.init = function () {
        //var gallery = $("#room-fotorama");
        //gallery.fotorama();
    };

    $scope.selectRoom = selectRoom

}]);

appControllers.controller('ContactController', ['$scope', function ($scope) {

}]);

appControllers.controller('NotFoundController', ['$scope', function ($scope) {

}]);
