/**
 * Created by sz43 on 9/10/2016.
 */
var myApp = angular.module("myApp",['ngRoute','ui.bootstrap']);

myApp.config(function($routeProvider){
    $routeProvider
        .when("/newRegistrationForm",{
            templateUrl:"templates/rfTemplate.html",
            controller:"rfController"
        })
        .when("/home",{
            templateUrl:"templates/home.html",
            controller:"homeController"
        })
        .when("/Level2",{
            templateUrl:"templates/level2.html",
            controller:"level1Controller"
            })
        .when("/Level3",{
            templateUrl:"templates/level3.html",
            controller:"level1Controller"
            })
         .when("/Level4",{
                templateUrl:"templates/level4.html",
                controller:"level1Controller"
            })


        .otherwise({
            redirectTo:"/home"
        });
});
