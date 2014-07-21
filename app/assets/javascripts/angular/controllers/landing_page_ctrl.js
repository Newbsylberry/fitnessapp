app.controller('LandingPageCtrl', ['$scope', '$location', '$routeParams', 'Auth',
    function($scope, $location, $routeParams, Auth) {

        Auth.currentUser().then(function(user) {
            // User was logged in, or Devise returned
            // previously authenticated session.
            $location.path('/diaries');
            $scope.user = user;
            console.log(user); // => {id: 1, ect: '...'}
        }, function(error) {
            // unauthenticated error
        });


        $scope.createUser = function () {
            var credentials = {};
            credentials.email = $scope.newUser.email;
            credentials.password = $scope.newUser.password;
            credentials.password_confirmation = $scope.newUser.password_confirmation;
            Auth.register(credentials);
            $scope.newUser.email = "";
            $scope.newUser.password = "";
            $scope.newUser.password_confirmation = "";
            alert("Thanks for registering, now sign in!");
        };

        $scope.logInUser = function () {
            var logInCredentials = {};
            logInCredentials.email = $scope.logIn.email;
            logInCredentials.password = $scope.logIn.password;
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