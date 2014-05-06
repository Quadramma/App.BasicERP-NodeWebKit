angular.module('WorkItemServ', []).factory('WorkItemService', ['$http',
    function($http) {


        return {

            get: function(success) {
                $http.get(appsingleton.domain + '/api/workItems').success(function(data) {
                    success(data);
                })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            },


            create: function(data, success) {
                $http.post(appsingleton.domain + '/api/workItems', data)
                    .success(function(data) {
                        success(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            },


            delete: function(id, success) {
                $http.delete(appsingleton.domain + '/api/workItems/' + id)
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