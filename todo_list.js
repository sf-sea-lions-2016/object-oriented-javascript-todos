var TodoList = function() {
	this.tasks = [];
  this.counter = 1;
};

var Task = function(task,input_id) {
  var task_complete = function() {
    this.completed = true;
  }
  task = {id: input_id, description: task, completed: false, complete: task_complete};
  return task;
}


TodoList.prototype.add = function(item) {
  task = new Task(item, this.counter)
  this.tasks.push(task)
  this.counter++;
}

TodoList.prototype.list = function() {
  for (var i=0; i< this.tasks.length; i++) {
    console.log(this.tasks[i]);
  };
};

TodoList.prototype.remove = function(item) {
  var index = this.tasks.indexOf(item);
  this.tasks.splice(index, 1);
};





// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

