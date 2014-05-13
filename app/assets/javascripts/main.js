var app = angular.module("FitnessApp", [
    'ngResource',
    'ngRoute',
    'templates'
    // "highcharts-ng"
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'diaries.html',
                controller: 'DiariesCtrl'
            }).
            when('/daily_entry/:daily_entry_Id', {
                templateUrl: 'daily_entry_home.html',
                controller: 'DailyEntryHomeCtrl'
            }).
            when('/diary/:diary_Id', {
                templateUrl: 'fitness_home.html',
                controller: "FitnessHomeCtrl"
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);