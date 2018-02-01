(function() {
  function Task($firebaseArray) {
    var Task = {};
    var ref = firebase.database().ref().child("Tasks");
    var tasks = $firebaseArray(ref);
    Task.all = tasks;

    Task.add = function(title,priority) {
      var task = {};
      task.title = title;
      task.priority = priority;
      task.created_at = new Date().valueOf();
      task.completed = false;
      tasks.$add(task);
      }
      Task.saveTask = function(task) {
        var allTasks = this.tasks
        var index = allTasks.$indexFor(task.$id);
        allTasks[index].completed = true;
        allTasks.$save(index);
      }
  return Task;

}



angular
.module('blocitoff')
.factory('Task', ['$firebaseArray', Task]);
})();;
