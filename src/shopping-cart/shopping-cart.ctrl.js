/*
 * Котроллер для корзины
 */

var cartControllers = angular.module('cartControllers', []);

cartControllers.controller('CartListCtrl', function ($scope){

    'use strict';

    $scope.added = [];
    $scope.total = 0;

    $scope.buy = function (item) {
        var isset = false;
        for (var i in $scope.added ){
            if( $scope.added[i].name == item.name ){
                $scope.added[i].amount++;
                isset = true;
            }
        }
        if (isset == false) {
            $scope.added.push({
                name: item.name,
                price: item.price,
                amount: 1
            });
        }
        $scope.total +=item.price;
    };
    $scope.delete = function(index){
        if($scope.added[index].amount >1){
            $scope.added[index].amount--;
            $scope.total = $scope.total - $scope.added[index].price;
            $scope.$apply();
        }
        else{
            $scope.total = $scope.total - $scope.added[index].price;
            $scope.added.splice(index, 1);
            $scope.$apply();
        }
        if ($scope.added.length == 0) $scope.total = 0;

    };
    $scope.deleteAll = function(){
        $scope.added=[];
        $scope.total =0;
        $scope.$apply();
    };

    $scope.getTotal = function(){
        return $scope.total;
    };


    $scope.isCollapsed = true;
});

