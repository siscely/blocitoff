(function() {
  function taskContent($firebaseArray) {
    var taskContent = {};
    var ref = firebase.database().ref().child("taskContent");
    var taskContents = $firebaseArray(ref);


    taskContent.getByTaskId = function(taskId) {
            // Filter the tasks by their task ID.
        var filteredTasks = $firebaseArray(ref.orderByChild("taskId").equalTo(taskId));
        return filteredTasks;
    };

    angular
        .module('blocitoff')
        .factory('taskContent', ['$firebaseArray', taskContent]);
    })();
