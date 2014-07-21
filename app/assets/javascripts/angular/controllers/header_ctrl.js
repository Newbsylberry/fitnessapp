app.controller('HeaderCtrl', ['$scope', '$location', '$routeParams', 'Auth',
    function($scope, $location, $routeParams, Auth) {

        Auth.currentUser().then(function(user) {
            // User was logged in, or Devise returned
            // previously authenticated session.
            $scope.user = user;
            console.log(user); // => {id: 1, ect: '...'}
        }, function(error) {
            // unauthenticated error
        });

        $scope.logInUser = function () {
            var logInCredentials = {};
            logInCredentials.email = $scope.logIn.email;
            logInCredentials.password = $scope.logIn.password;
            logInCredentials.remember_me = $scope.logIn.remember_me;
            Auth.login(logInCredentials).then(function(user) {
                alert("Welcome, " + user.email)
                $location.path( "/diaries")
            }, function(error) {
                alert("Login Failed :(");
            });
        };

        $scope.logOutUser = function () {
            Auth.logout().then(function(oldUser) {
                alert(oldUser.email + " you've signed out of the Fitness App!");
                $location.path( "/")
            }, function(error) {
                "An error occurred during logging out."
            });
        };
    }]);