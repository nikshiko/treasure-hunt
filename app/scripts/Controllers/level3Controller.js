/**
 * Created 53
 * by kidboyks on 22/9/16.
 */
myApp.controller('level3Controller',function level3Controller($scope,$http,$window,$uibModal,sharedProperties){

    $scope.showClue = function(sub){
        switch(sub){
            case 1 : sharedProperties.setProperty("Look Inside!:)");
                     break;
            case 2 : sharedProperties.setProperty("CODABAR");
                     break;
            case 4 : sharedProperties.setProperty("Vigneare Square Method :)");
                    break;
            case 6: sharedProperties.setProperty("This method is called the Play Fair.");
                    break;

        }

        $uibModal.open({
            templateUrl:"templates/clueTemplate.html",
            controller:"clueController"
        });
    }
    $scope.submitAnswer = function(sub) {
        if($scope.answer !== undefined) {
            var answerMap = {
                ques: sub,
                answer: $scope.answer.toLowerCase()
            };
        }

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                'Access-Control-Allow-Origin' : '*'
            }
        };
        console.log($scope.answer);
        $http.post('http://localhost:8082/', answerMap)
            .success(function (data, status, headers, config) {

                if( sub === 0)
                    $window.location.href = "http://localhost:8000/#/Level1/sub1";
                if( sub === 1)
                    $window.location.href = "http://localhost:8000/#/Level1/sub2";

                if( sub === 2)
                    $window.location.href = "http://localhost:8000/#/clear";

                if( sub === 3)
                    $window.location.href = "http://localhost:8000/#/Level3/sub2";

                if(sub === 4)
                    $window.location.href = "http://localhost:8000/#/Level3/sub3";

                if(sub === 5)
                    $window.location.href = "http://localhost:8000/#/Level3/sub4";

                if(sub === 6)
                    $window.location.href = "http://localhost:8000/#/clear";
                if(sub == 7)
                    $window.location.href = "http://localhost:8000/#/Level3/sub1"

            })
            .error(function (data, status, headers, config) {
                $scope.result = "Sorry !That was wrong."

            })
    }
    });
