'use strict';


var app = angular.module('hostelPaslek', [
    'ngRoute',
    'appControllers'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/news-feed', {
                templateUrl: 'static/web/templates/news_feed.html',
                controller: 'NewsController'
            }).
            when('/one', {
                templateUrl: 'static/web/templates/one.html',
                controller: 'AnotherController'
            }).
            when('/two', {
                templateUrl: 'static/web/templates/two.html',
                controller: 'TwoController'
            }).
            when('/', {
                redirectTo: '/news-feed'
            }).
            otherwise({
                templateUrl: 'static/web/templates/not_found.html'
            });
    }]);
