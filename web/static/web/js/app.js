'use strict';


var app = angular.module('hostelPaslek', [
    'ngRoute',
    'appServices',
    'appControllers'
]).directive('autoActive', ['$location', function ($location) {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element) {
            function setActive() {
                var path = $location.path();
                if (path) {
                    angular.forEach(element.find('li'), function (li) {
                        var anchor = li.querySelector('a');
                        if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                            angular.element(li).addClass('active-menu');
                        } else {
                            angular.element(li).removeClass('active-menu');
                        }
                    });
                }
            }

            setActive();
            scope.$on('$locationChangeSuccess', setActive);
        }
    }
}]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/news-feed', {
                templateUrl: 'static/web/templates/news_feed.html',
                controller: 'NewsController'
            }).
            when('/galery', {
                templateUrl: 'static/web/templates/gallery.html',
                controller: 'GalleryController'
            }).
            when('/pricing', {
                templateUrl: 'static/web/templates/pricing.html',
                controller: 'PricingController'
            }).
            when('/contact', {
                templateUrl: 'static/web/templates/contact.html',
                controller: 'ContactController'
            }).
            when('/', {
                redirectTo: '/news-feed'
            }).
            otherwise({
                templateUrl: 'static/web/templates/not_found.html'
            });
    }]);
