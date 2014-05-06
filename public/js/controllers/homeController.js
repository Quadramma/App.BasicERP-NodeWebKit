angular.module('HomeCtrl', []).controller('HomeController', function($scope, $rootScope) {

    $scope.username = $rootScope.credentials.username;

    console.log($rootScope.credentials);

    var diff = new Date($rootScope.credentials.expirationDate).getTime() - new Date().getTime();

    function convertMS(ms) {
        var d, h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        return {
            d: d,
            h: h,
            m: m,
            s: s
        };
    };

    var exp = convertMS(diff);

    //var interval = setInterval(function() {
    $scope.expirationDate = exp.d + " dias, " + exp.h + " horas, " + exp.m + " minutos.";


    //}, 1000);


});