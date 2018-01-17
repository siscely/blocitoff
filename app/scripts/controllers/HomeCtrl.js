(function() {
    function HomeCtrl(Task) {
      this.currentTask = null;
      this.tasks = Task.all;
      this.taskContents = null;
      this.createTask = Task.add;

      this.hideTasks = function(){
        var created_at = new Date(task.created_at);
        var oneDayAgo = created_at.getDate() - 1;
        if (completed == true && created_at > oneDayAgo)
      }

      this.selectTask = function(task){
        this.currentTask = task;

      }

}

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
