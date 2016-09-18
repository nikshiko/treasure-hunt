/**
 * Created by SZ43 on 9/18/2016.
 */
myApp.controller("carousalController",
    function ($scope){
    $scope.myInterval = 3000;
    $scope.slides = [
        {
            image: 'images/slide0.jpg'
        },
        {
            image: 'images/slide1.jpg'
        },
        {
            image: 'images/slide2.jpg'
        },
        {
            image: 'images/slide3.jpg'
        }
    ];
});