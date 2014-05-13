app.controller('DiariesCtrl', ['$scope', 'Diary', function($scope, Diary) {
    $scope.diaries = Diary.all();

    $scope.createDiary = function() {
        var attr = {};
        attr.name = ($scope.newDiary.name);
        var newDiary = Diary.create(attr);
        $scope.diaries.push(newDiary);
        $scope.newDiary.name = "";
    };

    $scope.deleteDiary = function(id, idx) {
        $scope.diaries.splice(idx, 1);
        return Diary.delete(id);
    };
}]);