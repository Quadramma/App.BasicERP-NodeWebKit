angular.module('WorkItemCtrl', []).controller('WorkItemController',
    function($scope, WorkItemService) {

        $scope.message = "WorkItem BICHES!";

        WorkItemService.get(function(data) {
            $scope.items = data;
            //console.log(data);
        });

        $scope.create = function() {
            WorkItemService.create($scope.formData, function(data) {
                $scope.items = data;
                $scope.formData = {};
                //console.log(data);
            });
        };
        $scope.delete = function(id) {
            WorkItemService.delete(id, function(data) {
                $scope.items = data;
                //console.log(data);
            });
        };

        appsingleton.on("nada", function() {

        });

    });