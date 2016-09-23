/**
 * Created 53
 * by kidboyks on 22/9/16.
 */
myApp.controller('level3Controller',function level3Controller($scope,$http,$window){

    $scope.showClue - function(){
        $uibModal.open({
            templateUrl:"templates/clueTemplate.html",
            controller:"clueController"
        });
    }
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
                if(sub === 1)
                $window.location.href = "http://localhost:8000/#/Level3/sub2";

                if(sub === 2)
                    $window.location.href = "http://localhost:8000/#/Level3/sub3";

                if(sub === 3)
                    $window.location.href = "http://localhost:8000/#/Level3/sub4";


            })
            .error(function (data, status, headers, config) {
                $window.location.href = "http://localhost:8000/#/failure";

            })
    }
    });
