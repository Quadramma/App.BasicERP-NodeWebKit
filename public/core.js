// public/core.js
var scotchTodo = angular.module('scotchTodo', [])
    .config(function($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });

function mainController($scope, $http) {
    $scope.formData = {};

    var domain = "http://localhost:1337";

    // when landing on the page, get all todos and show them
    $http.get(domain + '/api/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post(domain + '/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };



    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('domain +/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}