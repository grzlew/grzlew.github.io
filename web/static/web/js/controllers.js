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

appControllers.controller('LandingController', ['$scope', '$translate', '$sce', function ($scope, $translateProvider, $sce) {
    $scope.init = function () {
        $(function () {
            $('.fotorama').fotorama();
        });
        $translateProvider(['landing_welcome_text', 'landing_offerings']).then(function (translations) {
            $scope.who_we_are = $sce.trustAsHtml(translations.landing_welcome_text);
            $scope.what_we_offer = $sce.trustAsHtml(translations.landing_offerings);
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

appControllers.controller('PricingController', ['$scope', '$translate', '$sce', 'Room', function ($scope, $translateProvider, $sce, Room) {
    var controller = this;
    controller.rooms = Room.query([], function (data) {
        if (data.length > 0) {
            $scope.selectRoom(0);
        }
    });

    $scope.rooms = this.rooms;

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
    $translateProvider(['offerings_page']).then(function (translations) {
        $scope.what_we_offer = $sce.trustAsHtml(translations.offerings_page);
    });

}]);

appControllers.controller('ContactController', ['$scope', function ($scope) {
}]);

appControllers.controller('NotFoundController', ['$scope', function ($scope) {

}]);
