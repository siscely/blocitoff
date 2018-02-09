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
        var index = tasks.$indexFor(task.$id);
        tasks[index].completed = true;
        tasks.$save(index);
      }
  return Task;

}



angular
.module('blocitoff')
.factory('Task', ['$firebaseArray', Task]);
})();;
