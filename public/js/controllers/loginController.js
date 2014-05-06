angular.module('LoginCtrl', ["AppCtrl"]).controller('LoginController', function(
    $scope, $location, LoginService, $rootScope, $state, $timeout) {

    appsingleton.on("login", function() {

        $scope.message = "Welcome!";
        appsingleton.logged = true;

        setTimeout(function() {

            $scope.$apply(function() {
                $location.path("/");
            });
        }, 3000);

        //console.log("homeController->appsingleton:login");
        $scope.$apply();
    });


    $(function() {
        //  console.log("bindings");
        //bindings
        $(".login-btn").on("click", function() {
            LoginService.validate($scope.formData, function(data) {
                //success
                //console.log("success");
                //console.log(data);

                $rootScope.logged = true;
                $rootScope.credentials = data.item;
                $scope.error = "";


                $timeout(function() {
                    $scope.$apply(function() {
                        $state.go("home")
                    });
                }, 300)

            }, function(data) {
                //failed
                //console.log("failed");
                //console.log(data);

                $rootScope.logged = false;
                $scope.error = "Datos invalidos";

            });
        });

    });
});