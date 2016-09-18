/**
 * Created by sz43 on 9/10/2016.
 */
myApp.controller('rfController',
    function rfController($scope,$http,$window,$modalInstance,DataService){


        $scope.submitForm = function(){

            $scope.employee = DataService.employee;

            $scope.editableEmployee = angular.copy($scope.employee);
            $http.get('/', $scope.editableEmployee)
            .success(function(data, status, headers, config) {
                  alert($scope.editableEmployee)
            })
            .error(function(data, status, headers, config) {
                alert( "failure message: " + JSON.stringify({data: data}));
            });

            //$window.history.back();
            $scope.$broadcast('show-errors-event');
            if($scope.registrationForm.$invalid)
                return ;


            $modalInstance.close();

        }
        $scope.cancelForm = function(){
           // $window.history.back();
            $modalInstance.dismiss();
        }



    });

