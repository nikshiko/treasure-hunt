/**
 * Created by sz43 on 9/10/2016.
 */
var myApp = angular.module("myApp",["ngRoute"]);

myApp.config(function($routeProvider){
    $routeProvider
        .when("/home",{
            templateUrl:"templates/home.html",
            controller:"homeController"
        })
        .when("/newRegistrationForm",{
            templateUrl:"templates/rfTemplate.html",
            controller:"rfController"
        })
        .otherwise({
            redirectTo:"/home"
        });
});
