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
                templateUrl: 'fitness_home.html',
                controller: 'FitnessHomeCtrl'
            }).
            when('/daily_entry/:daily_entry_Id', {
                templateUrl: 'daily_entry_home.html',
                controller: 'DailyEntryHomeCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);