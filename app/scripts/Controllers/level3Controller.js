/**
 * Created by kidboyks on 22/9/16.
 */
myApp.controller('level3Controller',function subAnswer($scope,$http){
    $scope.answerMap ={
        ans:$scope.answer,
        qno:1
    } ;
    var config = {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
            'Access-Control-Allow-Origin' : '*'
        }
       };
    $http.post('http://localhost:8080/', $scope.answerMap)
        .success(function(data, status, headers, config) {
            alert("Success!")
        })
        .error(function(data, status, headers, config) {
            alert("Failure!");

        })

    })
