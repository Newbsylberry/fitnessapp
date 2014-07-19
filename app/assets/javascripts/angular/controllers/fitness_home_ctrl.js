app.controller('FitnessHomeCtrl', ['$scope', '$routeParams', '$filter', 'DailyEntry', 'Diary',
    function($scope, $routeParams, $filter, DailyEntry, Diary) {


        var weightDashAddWeight = function(daily_entry) {
        if (daily_entry.average_daily_weight)
            $scope.weightDashboardConfig.series[0].data.push([daily_entry.date,
                parseFloat(daily_entry.average_daily_weight)]);
        };

        Diary.get({diary_Id: $routeParams.diary_Id}, function(successResponse) {
            $scope.diary = successResponse;
            console.log("success response " + successResponse );
            console.log(successResponse);
            var daily_entries_ordered = $filter('orderBy')(successResponse.daily_entries, 'date');
            angular.forEach(daily_entries_ordered, weightDashAddWeight);
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

        $scope.deleteDailyEntry = function(daily_entry) {
            var index = $scope.diary.daily_entries.indexOf(daily_entry);
            if ( index != -1 ) {
                $scope.diary.daily_entries.splice(index, 1);
                return DailyEntry.delete(daily_entry.id);
            }
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