'use strict';

angular.module('myApp', []).controller('MovieController', function($scope, $http){
    $scope.search = [];
    $scope.cast = [];
    $scope.director = [];
    
    $scope.reloadPage = function(){
        window.location.reload();
    };
    
    $scope.buttonClicked = function() {
        
        if ($scope.search) {
            searchByTitle();
        }
        
        if ($scope.cast){
            searchByActor();
        }
        
        if ($scope.director){
            searchByDirector();
        }
         
    };
    
//    $scope.$watch('search', function() {
//        alert($scope.search);    
//        //fetch();
//    });    

    function searchByTitle(){
        $http.get("http://netflixroulette.net/api/api.php?title=" + $scope.search)
        .then(function(response){ 
            $scope.details = response.data; 
        })
        .catch(function(response) {
            console.error('message', response.status, response.data);
            $scope.status = response.status;
            $scope.message = response.data;
        });
    }
    
    function searchByActor(){
        $http.get("http://netflixroulette.net/api/api.php?actor=" + $scope.cast)
        .then(function(response){ 
            $scope.detailActor = response.data; 
        })
        .catch(function(response) {
            console.error('message', response.status, response.data);
            $scope.status = response.status;
            $scope.message = response.data;
        });
    }
    
    function searchByDirector(){
        $http.get("http://netflixroulette.net/api/api.php?director=" + $scope.director)
        .then(function(response){ 
            $scope.detailDirector = response.data; 
        })
        .catch(function(response) {
            console.error('message', response.status, response.data);
            $scope.status = response.status;
            $scope.message = response.data;
        });
    }
});
