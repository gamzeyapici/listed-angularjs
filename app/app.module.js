'use strict';
(function () {    
    angular.module('app', [])
        .run(function () {  
                                  
        })
        .config(function(){
        })        
        .component('product',{
            template:'<div>PRODUCT COMPONENT {{product}}</div>',
            controller:function($scope){
                $scope.product = 'Domates'
            }
        })
        .component('employee',{
            template:'<div>USER COMPONENT {{employee}}</div>',
            controller:function($scope){
                $scope.employee = 'Gamze Yapıcı'
            }
        })
        
})();