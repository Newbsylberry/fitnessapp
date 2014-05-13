app.factory('Diary', ['$resource', function($resource) {
    function Diary() {
        this.service = $resource('/api/diaries/:diary_Id', {diary_Id: '@id'}, {update: {method: 'PATCH'}});
    };
    Diary.prototype.all = function() {
        return this.service.query();
    };
    Diary.prototype.delete = function(dId) {
        this.service.remove({daily_entry_Id: dId});
    };
    Diary.prototype.get = function(id, successCallback, errorCallback) {
        this.service.get(id, successCallback, errorCallback);
    };
    Diary.prototype.create = function(attr) {
        return this.service.save(attr);
    }
    Diary.prototype.update = function(attr) {
        return this.service.update(attr);
    }
    return new Diary;
}]);