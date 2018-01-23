(function() {
    function HomeCtrl(Task) {
      this.currentTask = null;
      this.tasks = Task.all;
      this.taskContents = null;
      this.createTask = Task.add;

      this.filterTasks = function(task){
        var created_at = new Date(task.created_at);
        var now = new Date();
        now.setDate(now.getDate()-1)

          if (task.completed == true || created_at > now){

            return false;
          }
          else {
            return true;
          }
        }
      }

      // this.selectTask = function(task){
      //   this.currentTask = task;
      //
      // }

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
