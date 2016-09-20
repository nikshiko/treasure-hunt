/**
 * Created by sz43 on 9/10/2016.
 */
myApp.controller('rfController',
    function rfController($scope,$http,$window,$uibModalInstance,DataService){


        $scope.submitForm = function(){


            console.log($scope.editableEmployee.name);
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                    'Access-Control-Allow-Origin' : '*'
                }
            }


            var data1= $scope.editableEmployee;
            $http.post('http://localhost:8080/', $scope.editableEmployee)
            .success(function(data1, status, headers, config) {
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
