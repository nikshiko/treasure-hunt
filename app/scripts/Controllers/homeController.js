/**
 * Created by sz43 on 9/11/2016.
 */
myApp.controller("homeController",
    function($scope,$location,DataService){
        $scope.showRegistrationForm = function(){
            $location.path('/newRegistrationForm')
        }
    });