'use strict';

var app = angular.module('kamienicaPaslek', [
    'ngRoute',
    'appServices',
    'appControllers',
    'pascalprecht.translate'
]).directive('autoActive', ['$location', function ($location) {
    var match = function (anchor, path) {
        return anchor.href.match('#' + path + '(?=\\?|$)') || (anchor.href.indexOf('/room-prices') != -1 && path.indexOf('/room-prices/') != -1);
    };
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element) {
            function setActive() {
                var path = $location.path();
                if (path) {
                    angular.forEach(element.find('li'), function (li) {
                        var anchor = li.querySelector('a');
                        var activeClass = 'active';
                        if (match(anchor, path)) {
                            angular.element(li).addClass(activeClass);
                        } else {
                            angular.element(li).removeClass(activeClass);
                        }
                    });
                }
            }

            setActive();
            scope.$on('$locationChangeSuccess', setActive);
            $('.nav a').on('click', function (ev) {
                if (!ev.target.classList.contains('no-collapse')) {
                    $('.navbar-collapse').collapse('hide');
                }
            });
        }
    }
}]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/landing-page', {
                templateUrl: 'static/web/templates/landing_page.html',
                controller: 'LandingController'
            }).
            when('/galery', {
                templateUrl: 'static/web/templates/gallery.html',
                controller: 'GalleryController'
            }).
            when('/room-prices/:id?', {
                templateUrl: 'static/web/templates/pricing.html',
                controller: 'PricingController'
            }).
            when('/contact', {
                templateUrl: 'static/web/templates/contact.html',
                controller: 'ContactController'
            }).
            when('/about', {
                templateUrl: 'static/web/templates/about.html',
                controller: 'AboutController'
            }).
            when('/', {
                redirectTo: '/landing-page'
            }).
            otherwise({
                templateUrl: 'static/web/templates/not_found.html',
                controller: 'NotFoundController'
            });
    }]);

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('pl', messages_pl);
    $translateProvider.translations('en', messages_en);
    $translateProvider.determinePreferredLanguage();

    $translateProvider.fallbackLanguage('pl');
}]);

app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});
