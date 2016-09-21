/**
 * Created by sz43 on 9/10/2016.
 */

myApp.controller('rfController',
    function rfController($scope,$http,$window,$uibModalInstance,DataService){


        $scope.submitForm = function(){


            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                    'Access-Control-Allow-Origin' : '*'
                }
            }
            $scope.error_msg_password = null;
            if($scope.editableEmployee.password !== $scope.editableEmployee.passwordConfirmation)
                $scope.error_msg_password = "The passwords don't match!"
            var data = {
                name:$scope.editableEmployee.name,
                email:$scope.editableEmployee.email,
                empid:$scope.editableEmployee.empid,
                tpxid:$scope.editableEmployee.tpxid,
                password:$scope.editableEmployee.password,
            };
            $http.post('http://localhost:8080/', data)
            .success(function(data, status, headers, config) {
                  alert($scope.editableEmployee)
            })
            .error(function(data, status, headers, config) {
                alert( "failure message: " + JSON.stringify({data:data1}));
            });

            //$window.history.back();
            $scope.$broadcast('show-errors-event');
            if($scope.registrationForm.$invalid)
                return ;


            $uibModalInstance.close();

        }
        $scope.cancelForm = function(){
           // $window.history.back();
            $uibModalInstance.close();
        }



    });
