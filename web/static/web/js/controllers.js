'use strict';

var appControllers = angular.module('appControllers', []);
var first = "kamienicapaslek";
var last = "gmail.com";
var contact = first + '@' + last;

appControllers.controller('MainController', ['$scope', '$translate', function ($scope, $translateProvider) {
    var lang_key = 'NG_TRANSLATE_LANG_KEY';

    var switchLocale = function (localeKey) {
        $translateProvider.use(localeKey);
        localStorage.setItem(lang_key, localeKey);
        location.reload();
    };

    $scope.switchToPL = function () {
        switchLocale('pl');
    };
    $scope.switchToEN = function () {
        switchLocale('en');
    };

    var currentLocale = function () {
        return localStorage.getItem(lang_key) || 'pl';
    };

    $translateProvider.use(currentLocale());
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
        $scope.contact = contact;
    };
    ga('set', 'page', '/landing_page.html');
    ga('send', 'pageview');
}]);

appControllers.controller('GalleryController', ['$scope', function ($scope) {
    $scope.init = function () {
        $(function () {
            $('.fotorama').fotorama();
        });
    };
    ga('set', 'page', '/gallery.html');
    ga('send', 'pageview');
}]);

appControllers.controller('PricingController', ['$scope', '$translate', '$sce', 'Room', function ($scope, $translateProvider, $sce, Room) {
    var controller = this;
    controller.rooms = Room.query([], function (data) {
        if (data.length > 0) {
            $scope.selectRoom(0);
        }
    });

    var setActive = function (id) {
        $('.nav-item').each(function (index, li) {
            var activeClass = 'active';

            if (index === id) {
                $(li).addClass(activeClass);
            } else {
                $(li).removeClass(activeClass);
            }
        });
    };


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
        $scope.getArray = function (size) {
            return new Array(size);
        };
        setActive(roomId);
    };
    
    $translateProvider(['offerings_page']).then(function (translations) {
        $scope.what_we_offer = $sce.trustAsHtml(translations.offerings_page);
    });

    ga('set', 'page', '/pricing.html');
    ga('send', 'pageview');
}]);

appControllers.controller('ContactController', ['$scope', function ($scope) {
    $scope.contact = contact;
    ga('set', 'page', '/contact.html');
    ga('send', 'pageview');
}]);

appControllers.controller('NotFoundController', ['$scope', function ($scope) {
    ga('set', 'page', '/notfound.html');
    ga('send', 'pageview');
}]);
