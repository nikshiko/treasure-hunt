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
            $http.post('https://treasurehuntbackend.retailmetrx.com/reg/check', data)
            .success(function(data, status, headers, config) {
                var data = {
                    name:$scope.editableEmployee.name,
                    email:$scope.editableEmployee.email,
                    empid:$scope.editableEmployee.empid,
                    tpxid:$scope.editableEmployee.tpxid,
                    password:$scope.editableEmployee.password
                };

                $http.post('https://treasurehuntbackend.retailmetrx.com/reg/put', data)

                    .success(function(data, status, headers, config) {
                        if(data == "exists")
                        $window.location.href = "/#/failure";
                        else if(data == "registered")
                            $window.location.href = "/#/success";


                    })
                    .error(function(data, status, headers, config) {
                    $scope.registration_status = "Sorry,Issue with a connection.Please try again."

                })


            })
            .error(function(data, status, headers, config) {

                $scope.registration_status = "Sorry,Issue with a connection.Please try again."

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
            $http.post('https://treasurehuntbackend.retailmetrx.com/login', data)
                .success(function(data, status, headers, config) {
                    userPersistenceService.setCookieData($scope.editableEmployee.tpxid);

                    if(data == "0")
                    $window.location.href = "/#/Level1";
                    else
                    if(data == "1")
                        $window.location.href = "/#/Level1/sub2";
                    else
                    if(data == "2")
                        $window.location.href = "/#/clear";
                    else
                     if(data == "3")
                         $window.location.href = "/#/Level3"
                    else
                      if(data == "4")
                          $window.location.href = "/#/Level3/sub2"
                      else
                      if(data == "5")
                          $window.location.href = "/#/Level3/sub3"
                      else
                      if(data == "6")
                          $window.location.href = "/#/Level3/sub4"
                    if(data == "7")
                        $window.location.href = "/#/Level3/clear"

                    $uibModalInstance.close();


                })
                .error(function(data, status, headers, config) {
                    $scope.result = "Invalid Login! Did you forget your password? ";
                    $scope.contact = "Contact: TescoTechnologyDay.2016@in.tesco.com";

                });

            //$window.history.back();
            /*$scope.$broadcast('show-errors-event');
             if($scope.registrationForm.$invalid)
             return ;
             */



        }
        $scope.cancelForm = function(){
            // $window.history.back();
            $uibModalInstance.close();
        }
        $scope.resetForm = function(){
            // $window.history.back();
        $scope.result ="";$scope.contact = "";
            userPersistenceService.clearCookieData();

        }



    })

    .controller('logoutController',
        function logoutController($scope,$http,$window,userPersistenceService){


            $scope.logout = function(){
                userPersistenceService.clearCookieData();
                $window.location.href = "/#/home";
            }

        })

    .controller('clueController',
        function clueController($scope,$http,$window,sharedProperties,$uibModalInstance){



                $scope.clue = sharedProperties.getProperty();
               $scope.cancelForm = function() {
                   $uibModalInstance.close();
               }






        })

