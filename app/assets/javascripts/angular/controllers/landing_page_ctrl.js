app.controller('LandingPageCtrl', ['$scope', '$routeParams', 'User', 'Auth',
    function($scope, $routeParams, User, Auth) {


        $scope.createUser = function () {
            var credentials = {};
            credentials.email = $scope.newUser.email;
            credentials.password = $scope.newUser.password;
            credentials.password_confirmation = $scope.newUser.password_confirmation;
            Auth.register(credentials)
        };

        $scope.logInUser = function () {
            var logInCredentials = {};
            logInCredentials.email = $scope.logIn.email;
            logInCredentials.password = $scope.logIn.password;
            Auth.login(logInCredentials)
        };

        $scope.logOutUser = function () {
            Auth.logout().then(function(oldUser) {
                alert(oldUser.email + " you've signed out of the Fitness App!");
            }, function(error) {
                "An error occurred during logging out."
            });
        };



//        $scope.createUser = function() {
//            var attr = {};
//            attr.email = $scope.newUser.email;
//            attr.password = ($scope.newUser.password);
//            attr.password_confirmation = ($scope.newUser.password_confirmation)
//            User.create(attr);
//        };


    }]);