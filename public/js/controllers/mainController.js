function mainController($scope, $http, controllerName) {
    $scope.formData = {};

    // when landing on the page, get all list and show them
    $http.get(appsingleton.domain + '/api/' + controllerName)
        .success(function(data) {
        $scope.list = data;
            //  console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post(appsingleton.domain + '/api/' + controllerName, $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.list = data;
                // console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };



    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete(appsingleton.domain + "/api/" + controllerName + "/" + id)
            .success(function(data) {
                $scope.list = data;
                // console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}