/**
 * Created by sz43 on 9/10/2016.
 */
var myApp = angular.module("myApp",['ngRoute',"ui.bootstrap"]);

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

        .otherwise({
            redirectTo:"/home"
        });
});
