/**
 * Created by Ostap on 12/20/2016.
 */
(function(){
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.message="";
        $scope.values="";

        $scope.checkLunch = function(){
            var items = $scope.values.split(',')
                .map(function(item){return item.trim()})
                .filter(function(item){return item}),

                len = items.length;

            if(!len)
                $scope.message="Please enter data first";
            else{
                if(len > 3)
                    $scope.message="Too much!";
                else
                    $scope.message="Enjoy!";
            }
        }
    }

})();