/**
 * Created by sz43 on 9/11/2016.
 */
myApp.controller("homeController",
    function($scope,$location,$modal,$anchorScroll,DataService){
        $scope.showRegistrationForm = function(){
          //$location.path('/newRegistrationForm')
            $modal.open({
                templateUrl:"templates/rfTemplate.html",
                controller:"rfController"
            });
        }
        $scope.scrollTo = function(id) {
           var old =  $location.hash(id);
            $anchorScroll();
            $location.hash(old);
        }
    });
