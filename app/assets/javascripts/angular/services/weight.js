app.factory('Weight', ['$resource', function($resource) {
    function Weight() {
        this.service = $resource('/api/weights/:weight_Id', {weight_Id: '@id'}, {update: {method: 'PATCH'}});
    };
    Weight.prototype.all = function() {
        return this.service.query();
    };
    Weight.prototype.delete = function(wId) {
        this.service.remove({weight_Id: wId});
    };
    Weight.prototype.get = function(id, successCallback, errorCallback) {
        this.service.get(id, successCallback, errorCallback);
    };
    Weight.prototype.create = function(attr) {
        return this.service.save(attr);
    }
    Weight.prototype.update = function(attr) {
        return this.service.update(attr);
    }
    return new Weight;
}]);