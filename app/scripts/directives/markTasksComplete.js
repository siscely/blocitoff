(function() {
     function markTasksComplete() {
       return {
         templateUrl: '/templates/directives/',
         replace: true,
         restrict: 'E'
         scope: { },
         link: function(scope, element, attributes) {

         scope.onClickTaskComplete = function(event) {
           var created_at = new Date(task.created_at);
           var now = new Date();
           now.setDate(now.getDate()-1)


             if (task.completed == true && created_at > now){
               return false;
             }
             else {
               return true;
             }
           }
         }
       }
     }

     angular
         .module('blocitoff')
         .directive('markTasksComplete', ['$firebaseArray', markTasksComplete]);
 })();
