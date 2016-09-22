/**
 * Created by sz43 on 9/11/2016.
 */
myApp.controller("homeController",
    function($scope,$location,$uibModal,$anchorScroll,DataService){
        $scope.showRegistrationForm = function(){
          //$location.path('/newRegistrationForm')
            $uibModal.open({
                templateUrl:"templates/rfTemplate.html",
                controller:"rfController"
            });
        }
        $scope.showLoginForm = function(){

            $uibModal.open({
                templateUrl:"templates/loginTemplate.html",
                controller:"loginController"
            });
        }
        $scope.scrollTo = function(id) {
           var old =  $location.hash(id);
            $anchorScroll();
            $location.hash(old);
        }
    });
