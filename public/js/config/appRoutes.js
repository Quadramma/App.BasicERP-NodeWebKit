var appRoutes = angular.module('appRoutes', ['ui.router', "AppCtrl"]); //['ui.router']
appRoutes.config(function($stateProvider, $urlRouterProvider, $httpProvider) { //$routeProvider
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //
    $urlRouterProvider.otherwise('/login');
    //
    $stateProvider

    .state('login', {
        url: '/login',
        views: {
            '': {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            }
        }
    })

    .state('home', {
        url: '/home',
        views: {
            '': {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            }
        }
    })

    .state('home.list', {
        url: '/dogs',
        views: {
            '': {
                templateUrl: 'views/home.dogs.html',
                controller: function($scope) {
                    $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
                }
            },
            'view1@home.list': {
                template: 'view1'
            }
        }
    })

    .state('client', {
        url: '/client',
        views: {
            '': {
                templateUrl: 'views/client/clientLayout.html',
                controller: 'ClientController'
            }
        }
    })

    .state('client.list', {
        url: '/list',
        views: {
            '': {
                templateUrl: 'views/client/clientList.html'
            }
        }
    })

    .state('client.edit', {
        url: '/edit',
        views: {
            '': {
                templateUrl: 'views/client/clientEdit.html'
            },
            'clientForm@client.edit': {
                templateUrl: 'views/client/clientForm.html'
            }
        }
    })

    .state('client.create', {
        url: '/create',
        views: {
            '': {
                templateUrl: 'views/client/clientCreate.html'
            },
            'clientForm@client.create': {
                templateUrl: 'views/client/clientForm.html'
            }
        }
    })

    .state('supplier', {
        url: '/supplier',
        views: {
            '': {
                templateUrl: 'views/supplier/supplierLayout.html',
                controller: 'SupplierController'
            }
        }
    })

    .state('supplier.list', {
        url: '/list',
        views: {
            '': {
                templateUrl: 'views/supplier/supplierList.html'
            }
        }
    })

    .state('supplier.edit', {
        url: '/edit',
        views: {
            '': {
                templateUrl: 'views/supplier/supplierEdit.html'
            },
            'clientForm@client.edit': {
                templateUrl: 'views/supplier/supplierForm.html'
            }
        }
    })

    .state('supplier.create', {
        url: '/create',
        views: {
            '': {
                templateUrl: 'views/supplier/supplierCreate.html'
            },
            'supplierForm@client.create': {
                templateUrl: 'views/supplier/supplierForm.html'
            }
        }
    })

    .state('workitems', {
        url: '/workitems',
        views: {
            '': {
                templateUrl: 'views/workitems.html',
                controller: 'WorkItemController'
            }
        }
    })

});

appRoutes.run(function($rootScope, $location, $urlRouter, $state, $timeout) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        $rootScope.logged = $rootScope.logged || true;
        if (toState.url != "/login" && !$rootScope.logged) {
            //console.log("redirect to login ");

            event.preventDefault();
            $timeout(function() {
                event.currentScope.$apply(function() {
                    $state.go("login")
                });
            }, 300)

        } else {
            //console.log("good for " + toState.url);
        }
    });

});