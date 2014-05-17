app.controller('FitnessHomeCtrl', ['$scope', '$routeParams', 'DailyEntry', 'Diary',
    function($scope, $routeParams, DailyEntry, Diary) {

        Diary.get({diary_Id: $routeParams.diary_Id}, function(successResponse) {
            $scope.diary = successResponse;
            console.log("success response " + successResponse );
            console.log(successResponse);
        }, function(errorResponse) {
            console.log("error response");
            console.log(errorResponse);
        });

        $scope.daily_entries = DailyEntry.all();

        $scope.createDailyEntry = function() {
            var attr = {};
            attr.date = ($scope.newDailyEntry.date);
            attr.diary_id = ($scope.diary.id);
            var newDailyEntry = DailyEntry.create(attr);
            $scope.diary.daily_entries.push(newDailyEntry);
            $scope.newDailyEntry.date = "";
        };

        $scope.deleteDailyEntry = function(id, idx) {
            $scope.daily_entries.splice(idx, 1);
            var daily_entries = $scope.diary.daily_entries;
            daily_entries.splice(idx, 1);

            return DailyEntry.delete(id);
        };
    }]);