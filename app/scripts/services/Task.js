(function() {
  function Task($firebaseArray) {
    var Task = {};
    var ref = firebase.database().ref().child("Tasks");
    var tasks = $firebaseArray(ref);
    console.log(tasks)
    Task.all = tasks;

    Task.add = function(task) {
    tasks.$add(task);
    }


    Task.hide = function(taskId) {

    }
    return Task;
}

angular
.module('blocitoff')
.factory('Task', ['$firebaseArray', Task]);
})();;
