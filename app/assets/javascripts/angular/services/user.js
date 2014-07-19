app.factory('User', ['$resource', function($resource) {
    function User() {
        this.service = $resource('/api/users/:user_Id', {user_Id: '@id'}, {update: {method: 'PATCH'}});
    };
    User.prototype.all = function() {
        return this.service.query();
    };
    User.prototype.delete = function(uId) {
        this.service.remove({user_Id: uId});
    };
    User.prototype.get = function(id, successCallback, errorCallback) {
        this.service.get(id, successCallback, errorCallback);
    };
    User.prototype.create = function(attr) {
        return this.service.save(attr);
    }
    User.prototype.update = function(attr) {
        return this.service.update(attr);
    }
    return new User;
}]);