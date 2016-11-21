/**
 * Created by taras on 21.11.16.
 */
(function () {
    'use strict';

    angular.module('NameModule', [])

        .controller('NameController', function ($scope) {
            $scope.name = 'Easy';
            $scope.input = "";
            $scope.message = "";
            $scope.onClick = function () {
                if(!$scope.input){
                    $scope.message = "Please enter data!";
                } else{
                    if($scope.input.split(',').length > 3){
                        $scope.message = "Too much!";
                    } else {
                        $scope.message = "Enjoy!";
                    }

                }

            }


        });

})();
