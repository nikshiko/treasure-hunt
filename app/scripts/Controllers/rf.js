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

            var data = {
                name:$scope.editableEmployee.name,
                email:$scope.editableEmployee.email,
                empid:$scope.editableEmployee.empid,
                tpxid:$scope.editableEmployee.tpxid,
                password:$scope.editableEmployee.password
            };
            $http.post('http://localhost:8081/reg/check', data)
            .success(function(data, status, headers, config) {
                var data = {
                    name:$scope.editableEmployee.name,
                    email:$scope.editableEmployee.email,
                    empid:$scope.editableEmployee.empid,
                    tpxid:$scope.editableEmployee.tpxid,
                    password:$scope.editableEmployee.password
                };

                $http.post('http://localhost:8081/reg/put', data)

                    .success(function(data, status, headers, config) {
                        $window.location.href = "http://localhost:8000/#/success";

                    })
                    .error(function(data, status, headers, config) {
                    $window.location.href = "http://localhost:8000/#/failure";

                })


            })
            .error(function(data, status, headers, config) {
                $window.location.href = "http://localhost:8000/#/failure";

            });

            //$window.history.back();
            /*$scope.$broadcast('show-errors-event');
            if($scope.registrationForm.$invalid)
                return ;
*/

            $uibModalInstance.close();

        }
        $scope.cancelForm = function(){
           // $window.history.back();
            $uibModalInstance.close();
        }
        $scope.resetForm = function(){
            // $window.history.back();
            form.$setPristine();
            form.$setUntouched();

        }



    })
/**
 * Created by sz43 on 9/10/2016.
 */

.controller('loginController',
    function loginController($scope,$http,$window,$uibModalInstance,userPersistenceService){


        $scope.submitForm = function(){


            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                    'Access-Control-Allow-Origin' : '*'
                }
            }

            var data = {
                tpxid:$scope.editableEmployee.tpxid,
                password:$scope.editableEmployee.password,
            };
            $http.post('http://localhost:8082/', data)
                .success(function(data, status, headers, config) {
                    userPersistenceService.setCookieData($scope.editableEmployee.tpxid);

                    if(data == 0)
                    $window.location.href = "http://localhost:8000/#/Level1";
                    else
                    if(data == 1)
                        $window.location.href = "http://localhost:8000/#/Level1/sub2";
                    else
                    if(data == 2)
                        $window.location.href = "http://localhost:8000/#/Level1/clear";

                })
                .error(function(data, status, headers, config) {
                    $scope.result = "Invalid Login!Forgot "

                });

            //$window.history.back();
            /*$scope.$broadcast('show-errors-event');
             if($scope.registrationForm.$invalid)
             return ;
             */

            $uibModalInstance.close();

        }
        $scope.cancelForm = function(){
            // $window.history.back();
            $uibModalInstance.close();
        }
        $scope.resetForm = function(){
            // $window.history.back();


        }



    })

    .controller('logoutController',
        function logoutController($scope,$http,$window,userPersistenceService){


            $scope.logout = function(){
                userPersistenceService.clearCookieData();
                $window.location.href = "http://localhost:8000/#/home";
            }

        })

    .controller('clueController',
        function clueController($scope,$http,$window,sharedProperties,$uibModalInstance){



                $scope.clue = sharedProperties.getProperty();
               $scope.cancelForm = function() {
                   $uibModalInstance.close();
               }






        })

