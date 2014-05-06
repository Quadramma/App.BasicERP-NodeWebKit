angular.module('LoginServ', []).factory('LoginService', ['$http',
    function($http) {


        return {

            validate: function(data, success, failed) {
                $http.post(appsingleton.domain + '/api/user/validate', data).success(function(data) {
                    if (data.ok)
                        success(data);
                    else
                        failed(data);
                })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            }
        };

    }
]);