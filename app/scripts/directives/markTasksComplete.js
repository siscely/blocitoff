(function() {
     function markTasksComplete($firebaseArray) {
       return {
         templateUrl: '/templates/directives/',
         replace: true,
         restrict: 'E',
         scope: {
           toggle: '=',
          },
         link: function(scope, element, attributes) {

           $scope.$watch("toggle", function(value) {
                element.toggleClass('active', value)
            })

            element.click(function() {
                $scope.$apply(function() {
                    $scope.toggle = !$scope.toggle
                })
            })
        }
    }
  }



     angular
         .module('blocitoff')
         .directive('markTasksComplete', ['Task', '$firebaseArray', markTasksComplete]);
 })();
