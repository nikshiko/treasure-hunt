/**
 * Created 53
 * by kidboyks on 22/9/16.
 */
myApp.controller('level3Controller',function level3Controller($scope,$http,$window,$uibModal,sharedProperties,userPersistenceService){

        $scope.tpxid = userPersistenceService.getCookieData();

        $scope.logstatus = ($scope.tpxid == undefined || $scope.tpxid == "" )?"LOGIN":"LOG OUT";
    $scope.showClue = function(sub){
        switch(sub){
            case 1 : sharedProperties.setProperty("Look Inside!:)");
                     break;
            case 2 : sharedProperties.setProperty("CODABAR");
                     break;
            case 3 : sharedProperties.setProperty("Begin by grouping the letters into groups of four")
                     break;
            case 4 : sharedProperties.setProperty("This cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword.");
                    break;
            case 5 : sharedProperties.setProperty("Spaces and punctuation marks are considered as letters.")
                    break;
            case 6: sharedProperties.setProperty("Play Fair! okay?");
                    break;

        }

        $uibModal.open({
            templateUrl:"templates/clueTemplate.html",
            controller:"clueController"
        });
    }
    $scope.submitAnswer = function(sub) {
       if(sub == 3) {
           $scope.answer = $scope.answer.replace(/ /g, '');
       }

        if($scope.answer !== undefined) {
            var answerMap = {
                ques: sub,
                answer: $scope.answer.toLowerCase(),
                tpxid : userPersistenceService.getCookieData()
            };
        }

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                'Access-Control-Allow-Origin' : '*'
            }
        };


        if (sub === 0)
            $window.location.href = "/#/Level1/sub1";
        if (sub === 7)
            $window.location.href = "/#/Level3/sub1";
       if(sub !=0 && sub !=7)
        $http.post('https://treasurehuntbackend.retailmetrx.com/levels', answerMap)
            .success(function (data, status, headers, config) {
               if(data == "correct") {

                   if (sub === 1)
                       $window.location.href = "/#/Level1/sub2";

                   if (sub === 2) {
                       $scope.levelCheck = "level1pass";
                       $window.location.href = "/#/clear";

                   }
                   if (sub === 3)
                       $window.location.href = "/#/Level3/sub2";

                   if (sub === 4)
                       $window.location.href = "/#/Level3/sub3";

                   if (sub === 5)
                       $window.location.href = "/#/Level3/sub4";

                   if (sub === 6) {
                       $scope.levelCheck = "default";
                       $window.location.href = "/#/clear";

                   }
                   if (sub == 7)
                       $window.location.href = "/#/Level3/sub1"
               }
               else if(data == "wrong")
               {
                   $scope.result = "Sorry !That was wrong.";
               }
               else if(data == "login")
               {
                   $window.location.href = "/#/home";
               }


            })
            .error(function (data, status, headers, config) {
                $scope.result = "There might be a connection issue.Please try after sometime..."

            })

    }
    });
