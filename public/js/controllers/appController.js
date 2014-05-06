angular.module('AppCtrl', []).controller('AppController', function($scope, $http, $rootScope) {


    $rootScope.credentials = {
        username: "",
        password: ""
    };
    $rootScope.logged = false;

});