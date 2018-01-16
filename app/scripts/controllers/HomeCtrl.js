(function() {
    function HomeCtrl(Task) {
      this.currentTask = null;
      this.tasks = Task.all;
      this.taskContents = null;
      this.hideTasks = Task.hide;
      this.createTask = Task.add;

      this.selectTask = function(task){
        this.currentTask = task;

      }

}

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
