(function() {
  function Task($firebaseArray) {
    var Task = {};
    var ref = firebase.database().ref().child("Tasks");
    var tasks = $firebaseArray(ref);
    Task.all = tasks;

    Task.add = function(task,priority) {
      var task = {};
      task.title = task;
      task.priority = priority;
      task.created_at = new Date().valueOf();
      tasks.$add(task);
      }
  return Task;
}

angular
.module('blocitoff')
.factory('Task', ['$firebaseArray', Task]);
})();;
