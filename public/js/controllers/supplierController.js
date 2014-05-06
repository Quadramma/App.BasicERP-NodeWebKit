angular.module('SupplierCtrl', []).controller('SupplierController',
    function($scope, $http, $state, $location, SupplierService) {

        $scope.syncList = function(list) {
            $scope.list = list;
            console.log($scope.list);
        }
        $scope.select = function(item) {
            $scope.selected = item;
            $scope.formData = item;
        };
        $scope.sync = function() {
            SupplierService.get(function(data) {
                $scope.syncList(data);
            });
        };
        $scope.update = function() {
            SupplierService.update($scope.formData, function(data) {
                $scope.formData = {};
                $scope.syncList(data);
            });
            $location.path("/supplier/list");
        };
        $scope.create = function() {
            SupplierService.create($scope.formData, function(data) {
                $scope.formData = {};
                $scope.syncList(data);
            });
            $location.path("/supplier/list");
        };
        $scope.delete = function(item) {
            SupplierService.delete(item.id, function(data) {
                $scope.formData = {};
                $scope.syncList(data);
            });
            $location.path("/supplier/list");
        };
        $scope.sync();
    });