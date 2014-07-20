var app = angular.module("FitnessApp", [
    'ngResource',
    'ngRoute',
    'templates',
    'highcharts-ng',
    'Devise'
    ]).
    config(function(AuthProvider) {
        AuthProvider.registerPath('/api/users.json');
        AuthProvider.loginPath('/api/users/sign_in.json');
        AuthProvider.logoutPath('/api/users/sign_out.json');
    });

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'landing_page.html',
                controller: 'LandingPageCtrl'
            }).
            when('/diaries', {
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