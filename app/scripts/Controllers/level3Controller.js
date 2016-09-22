/**
 * Created by kidboyks on 22/9/16.
 */
myApp.controller('level3Controller',function level3Controller($scope,$http,$window){


    $scope.submitAnswer = function(sub) {
        var answerMap ={
            ques:sub,
            answer:$scope.answer
        } ;


        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                'Access-Control-Allow-Origin' : '*'
            }
        };
        console.log($scope.answer);
        $http.post('http://localhost:8080/', answerMap)
            .success(function (data, status, headers, config) {
                $window.location.href = "http://localhost:8000/#/Level3/sub2"
            })
            .error(function (data, status, headers, config) {
                alert(answerMap.ques + " - " +answerMap.answer);

            })
    }
    });
