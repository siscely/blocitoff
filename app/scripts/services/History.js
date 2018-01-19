(function() {
  function History($firebaseArray) {
    var Task = {};
    var ref = firebase.database().ref().child("Tasks");
    var tasks = $firebaseArray(ref);
    console.log(tasks)
    Task.all = tasks;

    History.add = function(task) {
    tasks.$add(task);
    }

  return Task;
}

angular
.module('blocitoff')
.factory('History', ['$firebaseArray', History]);
})();;
