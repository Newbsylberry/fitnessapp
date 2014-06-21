app.controller('FitnessHomeCtrl', ['$scope', '$routeParams', 'DailyEntry', 'Diary',
    function($scope, $routeParams, DailyEntry, Diary) {


        var weightDashAddWeight = function(daily_entry) {
        if (daily_entry.average_daily_weight)
            $scope.weightDashboardConfig.series[0].data.push([daily_entry.date,
                parseFloat(daily_entry.average_daily_weight)]);
        };



        Diary.get({diary_Id: $routeParams.diary_Id}, function(successResponse) {
            $scope.diary = successResponse;
            console.log("success response " + successResponse );
            console.log(successResponse);
            angular.forEach(successResponse.daily_entries, weightDashAddWeight);
        }, function(errorResponse) {
            console.log("error response");
            console.log(errorResponse);
        });

        $scope.createDailyEntry = function() {
            var attr = {};
            attr.date = ($scope.newDailyEntry.date);
            attr.diary_id = ($scope.diary.id);
            var newDailyEntry = DailyEntry.create(attr);
            $scope.diary.daily_entries.push(newDailyEntry);
            $scope.newDailyEntry.date = "";
        };

        $scope.deleteDailyEntry = function(id, idx) {
            $scope.diary.daily_entries.splice(idx, 1);

            return DailyEntry.delete(id);
        };



        $scope.weightDashboardConfig = {
            options: {
                chart: {
                    type: 'line'
                },
                zoomType: 'xy'
            },
            series: [{
                name: 'Weight',
                data: []
            }],
            title: {
                text: 'Weight History'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                plotLines:[]
            },
            loading: false
        }


    }]);