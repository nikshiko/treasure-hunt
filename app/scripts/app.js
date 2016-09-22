/**
 * Created by sz43 on 9/10/2016.
 */
var myApp = angular.module("myApp",['ngRoute','ui.bootstrap']);


myApp.config(function($routeProvider,$httpProvider){

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
        .when("/newRegistrationForm",{
            templateUrl:"templates/rfTemplate.html",
            controller:"rfController"
        })
        .when("/loginForm",{
            templateUrl:"templates/loginTemplate.html",
            controller:"loginController"
        })

        .when("/home",{
            templateUrl:"templates/home.html",
            controller:"homeController"
        })
        .when("/Level3",{
            templateUrl:"templates/Level3.html",
            controller:"level3Controller"
        })

        .when("/Level3/sub1",{
            templateUrl:"templates/sublevel3p1.html",
            controller:"level3Controller"
            })

        .when("/Level3/sub2",{
            templateUrl:"templates/sublevel3p2.html",
            controller:"level3Controller"
        })

        .when("/Level3/sub3",{
            templateUrl:"templates/sublevel3p3.html",
            controller:"level3Controller"
        })

        .when("/Level3/sub4",{
            templateUrl:"templates/sublevel3p4.html",
            controller:"level3Controller"
        })
        .when("/failure",{
           templateUrl:"templates/failure.html"
        })
        .when("/success",{
            templateUrl:"templates/success.html"
        })

        .otherwise({
            redirectTo:"/home"
        });
});
