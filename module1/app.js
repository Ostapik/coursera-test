/**
 * Created by Ostap on 12/20/2016.
 */
(function(){
    'use strict';

    angular.module('NameCalculator', [])

        .controller('NameCalculatorController', function($scope){
            $scope.name = "";
            $scope.totalValue=0;

            $scope.displayNumeric = function(){
                var totalNameValue = 0;
                $scope.totalValue = totalNameValue;
            }

            function calculate(str){

            }
        });
})();