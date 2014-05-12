app.factory('DailyEntry', ['$resource', function($resource) {
    function DailyEntry() {
        this.service = $resource('/api/daily_entries/:daily_entry_Id', {daily_entry_Id: '@id'}, {update: {method: 'PATCH'}});
    };
    DailyEntry.prototype.all = function() {
        return this.service.query();
    };
    DailyEntry.prototype.delete = function(deId) {
        this.service.remove({daily_entry_Id: deId});
    };
    DailyEntry.prototype.get = function(id, successCallback, errorCallback) {
        this.service.get(id, successCallback, errorCallback);
    };
    DailyEntry.prototype.create = function(attr) {
        return this.service.save(attr);
    }
    DailyEntry.prototype.update = function(attr) {
        return this.service.update(attr);
    }
    return new DailyEntry;
}]);