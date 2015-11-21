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
    var controller= this;
    controller.rooms = Room.query();

    $scope.rooms = this.rooms;
    //$scope.options = {width: '100%', height: 400, loop: true, keyboard: true, nav: 'thumbs'};

    $scope.selectRoom = function (roomId) {
        var currentRoom = controller.rooms[roomId];
        $scope.currentRoom = currentRoom;

        if (controller.galleryFotorama === undefined) {
            var $gallery = $("#room-fotorama");
            var gallery = $gallery.fotorama({data: currentRoom.images});
            controller.galleryFotorama = gallery.data('fotorama');
        } else {
            controller.galleryFotorama.load(currentRoom.images);
        }
    };

}]);

appControllers.controller('ContactController', ['$scope', function ($scope) {
x
}]);

appControllers.controller('NotFoundController', ['$scope', function ($scope) {

}]);
