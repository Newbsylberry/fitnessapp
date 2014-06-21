app.controller('DailyEntryHomeCtrl', ['$scope', '$routeParams', 'DailyEntry', 'Weight',
    function($scope, $routeParams, DailyEntry, Weight) {

        DailyEntry.get({daily_entry_Id: $routeParams.daily_entry_Id}, function(successResponse) {
            $scope.daily_entry = successResponse;
            console.log("success response " + successResponse );
            console.log(successResponse);
        }, function(errorResponse) {
            console.log("error response");
            console.log(errorResponse);
        });

        $scope.createWeight = function() {
            var attr = {};
            attr.daily_entry_id = $scope.daily_entry.id;
            attr.measured_weight = ($scope.newWeight.measured_weight);
            attr.time_weighed = ($scope.newWeight.time_weighed);
            attr.diary_average_weight = ($scope.daily_entry.diary_average_weight);
            var newWeight = Weight.create(attr);
            $scope.daily_entry.weights.push(newWeight);
            $scope.newWeight.measured_weight = "";
            $scope.newWeight.time_weighed = "";
        };

        $scope.deleteWeight = function(id, idx) {
            $scope.daily_entry.weights.splice(idx, 1);

            return Weight.delete(id);
        };

        $scope.updateDailyEntry = function() {
            var attr = {};
            attr.id = ($scope.daily_entry.id);
            attr.daily_description = ($scope.daily_description);
            DailyEntry.update(attr);
            $scope.daily_description = "";
        };

    }]);