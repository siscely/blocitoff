(function() {
    function HistoryCtrl(Task) {
      this.createTask = Task.add;



}

    angular
        .module('blocitoff')
        .controller('HistoryCtrl', ['Task', 'History', HistoryCtrl]);
})();
