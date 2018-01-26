(function() {
    function HistoryCtrl(Task) {
      this.tasks = Task.all;

      this.displayOldTasks = function(task){
        var created_at = new Date(task.created_at);
        var now = new Date();
        now.setDate(now.getDate()-1)


          if (task.completed == true || created_at < now){
            console.log(true);
            return true;
          }
          else {
            console.log(false);
            return false;
          }
        }
}

    angular
        .module('blocitoff')
        .controller('HistoryCtrl', ['Task', HistoryCtrl]);
})();
