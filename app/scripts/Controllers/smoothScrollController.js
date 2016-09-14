/**
 * Created by sz43 on 9/14/2016.
 */
myApp.controller('ScrollCtrl', function($scope, $location, anchorSmoothScroll) {

    $scope.gotoElement = function (eID){
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash(eID);

        // call $anchorScroll()
        anchorSmoothScroll.scrollTo(eID);

    };
});
