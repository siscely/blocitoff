(function() {
    function HomeCtrl(Task) {
      this.currentTask = null;
      this.tasks = Task.all;
      this.createTask = Task.add;
      this.saveTask = Task.saveTask;

      this.filterTasks = function(task){
        var created_at = new Date(task.created_at);
        var now = new Date();
        now.setDate(now.getDate()-1)

          if (task.completed == true || created_at < now){

            return false;
          }
          else {
            return true;
          }
        }




};


    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['Task', HomeCtrl])
        .directive('checkTaskCompletion', function() {
          return {
            scope:{
              complete: '=info'
            },
            template:"<input type='checkbox'ng-click= {{complete}}>"
          }
        });
})();
