angular.module('SupplierServ', []).factory('SupplierService', ['$http',
    function($http) {


        return {
            get: function(success) {
                $http.get(appsingleton.domain + '/api/supplier/list').success(function(data) {
                    success(data);
                })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            },
            create: function(data, success) {
                $http.post(appsingleton.domain + '/api/supplier/create', data)
                    .success(function(data) {
                        success(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            },
            update: function(data, success) {
                $http.post(appsingleton.domain + '/api/supplier/update', data)
                    .success(function(data) {
                        success(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            },
            delete: function(id, success) {
                $http.delete(appsingleton.domain + '/api/supplier/delete/' + id)
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