app.controller('FitnessHomeCtrl', ['$scope', 'DailyEntry', function($scope, DailyEntry) {
    $scope.daily_entries = DailyEntry.all();

    $scope.createDailyEntry = function() {
        var attr = {};
        attr.date = ($scope.newDailyEntry.date);
        var newDailyEntry = DailyEntry.create(attr);
        $scope.daily_entries.push(newDailyEntry);
        $scope.newDailyEntry.date = "";
    };

    $scope.deleteDailyEntry = function(id, idx) {
        $scope.daily_entries.splice(idx, 1);
        return DailyEntry.delete(id);
    };
}]);