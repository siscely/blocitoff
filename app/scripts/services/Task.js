(function() {
  function Task($firebaseArray) {
    var Task = {};
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);

    Task.all = tasks;

    Task.add = function(task) {
    tasks.$add(task);
    }


    Task.hide = function(taskId) {
    var filteredTasks = $firebaseArray(ref.orderByChild("taskId").equalTo(taskId));
    }
    return Task;
}

angular
.module('blocitoff')
.factory('Task', ['$firebaseArray', Task]);
})();;
