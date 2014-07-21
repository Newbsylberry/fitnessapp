app.controller('DiariesCtrl', ['$scope', '$http', '$location', 'Diary', 'Auth',
    function($scope, $http, $location, Diary, Auth) {


    $scope.$on('devise:unauthorized', function(event, xhr, deferred) {
        // Ask user for login credentials
        alert("Please Sign In!");
        $location.path('/');
//        Auth.login(credentials).then(function() {
//            // Successfully logged in.
//            // Redo the original request.
//            return $http(xhr.config);
//        }).then(function(response) {
//                // Successfully recovered from unauthorized error.
//                // Resolve the original request's promise.
//                deferred.resolve(response);
//            }, function(error) {
//                // There was an error.
//                // Reject the original request's promise.
//                deferred.reject(error);
//            });
    });


    Auth.currentUser().then(function(user) {
        // User was logged in, or Devise returned
        // previously authenticated session.
        $scope.user = user;
        console.log(user); // => {id: 1, ect: '...'}
    }, function(error) {
        // unauthenticated error
    });

        $scope.diaries = Diary.all();

        $scope.createDiary = function() {
            var attr = {};
            attr.name = ($scope.newDiary.name);
            attr.user_id = ($scope.user.id);
            var newDiary = Diary.create(attr);
            $scope.diaries.push(newDiary);
            $scope.newDiary.name = "";
        };

        $scope.deleteDiary = function(id, idx) {
            $scope.diaries.splice(idx, 1);
            return Diary.delete(id);
        };


}]);