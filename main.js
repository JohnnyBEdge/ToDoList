var taskList = {
    tasks:[],
    addTask: function(taskText){
        this.tasks.push({
            taskText: taskText,
            completed: false
        });
    },
    changeTask: function(position,taskText){
        this.tasks[position].taskText = taskText;
    },
    removeTask: function(position){
        this.tasks.splice(position,1);
    },
    toggleCompleted: function(position){
        var task = this.tasks[position];
        task.completed = !task.completed;
    },

    toggleAll: function(){
        var completedTasks = 0;
        var totalTasks = this.tasks.length;

        this.tasks.forEach(function(task){
            if(task.completed === true){
                completedTasks++;
            }
        })

        
        //makes true or false
        this.tasks.forEach(function(task){ 
            if(completedTasks === totalTasks){
                task.completed = false;
            } else {
                task.completed = true;
            }
            });
        }
    }

var handlers = {
    toggleAll: function(){
        taskList.toggleAll();
        view.showTasks();
    },
    addTask: function(){
        var addNewTask = document.getElementById('addNewTask');
        taskList.addTask(addNewTask.value);
        addNewTask.value= "";
        view.showTasks();
    }, 
    changeTask: function(){
        var changeTaskLocation = document.getElementById('changeTaskLocation');
        var changeTaskText = document.getElementById('changeTaskText');
        taskList.changeTask(changeTaskLocation.valueAsNumber,changeTaskText.value)
        changeTaskLocation.value = "";
        changeTaskText.value = "";
        view.showTasks();
    },
    removeTask: function(position){
        taskList.removeTask(position);
        view.showTasks();
    }, 
    toggleCompleted: function(){
        
        var toggleCompletedBtn = document.getElementById('toggleCompletedBtn');
        taskList.toggleCompleted(toggleCompletedBtn.valueAsNumber)
        view.showTasks();
    },
}

var view = {
    showTasks: function(){
        var tasksUl = document.querySelector('ul');
        tasksUl.innerHTML = "";
        taskList.tasks.forEach(function(task, position){
            var tasksLi = document.createElement('li');

            var taskCompleted = '';

            if(task.completed === true){
                taskCompleted = '( X ) '+ task.taskText;
            } else {
                taskCompleted = '(  ) '+ task.taskText;
            }
            tasksLi.id = position;
            tasksLi.textContent = taskCompleted;
            tasksLi.appendChild(this.createDeleteBtn());
            tasksUl.appendChild(tasksLi);
        },this)

    },
    createDeleteBtn: function(){
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteButton";
        return deleteBtn
        
    },
    setUpEventListeners: function(){
        var tasksUL = document.querySelector('ul');

        tasksUL.addEventListener('click', function(event){
            var clickedElement = event.target;

        if(clickedElement.className === 'deleteButton'){
            handlers.removeTask(parseInt(clickedElement.parentNode.id))
        }
        })

    }
}
    view.setUpEventListeners();


