/**
 * Created by sz43 on 9/10/2016.
 */
myApp.controller('rfController',
    function rfController($scope,rfService){
        $scope.employee = rfService.employee;
    });