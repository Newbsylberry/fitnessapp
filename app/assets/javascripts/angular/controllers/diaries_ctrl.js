app.controller('DiariesCtrl', ['$scope', 'Diary', 'Auth', function($scope, Diary, Auth) {


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