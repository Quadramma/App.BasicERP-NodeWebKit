angular.module('ClientServ', []).factory('ClientService', ['$http',
    function($http) {


        return {
            get: function(success) {
                $http.get(appsingleton.domain + '/api/client/list').success(function(data) {
                    success(data);
                })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            },
            create: function(data, success) {
                $http.post(appsingleton.domain + '/api/client/create', data)
                    .success(function(data) {
                        success(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            },
            update: function(data, success) {
                $http.post(appsingleton.domain + '/api/client/update', data)
                    .success(function(data) {
                        success(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            },
            delete: function(id, success) {
                $http.delete(appsingleton.domain + '/api/client/delete/' + id)
                    .success(function(data) {
                        success(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            }
        }

    }
]);