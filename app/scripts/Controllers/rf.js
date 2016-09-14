/**
 * Created by sz43 on 9/10/2016.
 */
myApp.controller('rfController',
    function rfController($scope,$window,$modalInstance,DataService){
        $scope.employee = DataService.employee;

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.submitForm = function(){
            $scope.employee = angular.copy($scope.editableEmployee);
            //$window.history.back();

        }
        $scope.cancelForm = function(){
           // $window.history.back();
            $modalInstance.dismiss();
        }
    });

