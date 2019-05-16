(function () {
    'use strict';

    function ProductController($scope, $state) {
        var ctrl = this;   
                
        $scope.init = function () {             
        }

        $scope.$watch("$ctrl.degisken", function(newValue, oldValue) {                      
            $scope.user = ctrl.degisken;
          });
          $scope.$watch("$ctrl.degisken2", function(newValue, oldValue) {                      
            $scope.user1 = ctrl.degisken2;
          });
    }

    angular.module('g-app')
        .component('product', {
            templateUrl: 'app/product/product.component.html',
            controller: ProductController,
            bindings: {
                degisken: '<',
                degisken2:'<'
            }
        }).config(function ($stateProvider) {
            $stateProvider.state('product', {
                url: '/products',
                template: '<product></product>'                
            })
        });
})();