angular.module('ClientCtrl', []).controller('ClientController',
    function($scope, $http, $state, $location, ClientService) {


        $scope.syncList = function(list) {
            $scope.list = list;
            console.log($scope.list);
        }
        $scope.select = function(item) {
            $scope.selected = item;
            $scope.formData = item;
        };
        $scope.sync = function() {
            ClientService.get(function(data) {
                $scope.syncList(data);
            });
        };
        $scope.update = function() {
            ClientService.update($scope.formData, function(data) {
                $scope.formData = {};
                $scope.syncList(data);
            });
            $location.path("/client/list");
        };
        $scope.create = function() {
            ClientService.create($scope.formData, function(data) {
                $scope.formData = {};
                $scope.syncList(data);
            });
            $location.path("/client/list");
        };
        $scope.delete = function(item) {
            ClientService.delete(item.id, function(data) {
                $scope.formData = {};
                $scope.syncList(data);
            });
            $location.path("/client/list");
        };
        $scope.sync();
    });