app.controller('MainController', function($scope, $ionicModal) {

    //initialize the tasks scope with empty array
    $scope.tasks = [];

    //initialize the task scope with empty object
    $scope.task = {};

    //initialize
    $scope.getTasks = function () {
		
	}

    //creates a new task
    $scope.createTask = function() {
    	$scope.tasks.push($scope.task);
    }
    
    //removes a task
    $scope.removeTask = function() {

    }

    //configure the ionic modal before use
    $ionicModal.fromTemplateUrl('new-task-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.taskModal = modal;
    });
});
