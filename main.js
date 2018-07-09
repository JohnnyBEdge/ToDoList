var taskList = {
    tasks:[],
    showTasks: function(){
        if(this.tasks.length === 0){
            console.log('Your list is empty!')
        }else{ 
        console.log('Tasks: ');
        for(var i = 0; i < this.tasks.length; i++){
            if (this.tasks[i].completed === true){
                console.log('( x )', this.tasks[i].taskText);
            } else {
                console.log('(  )', this.tasks[i].taskText);
            }
        }
        }
    },
    addTask: function(taskText){
        this.tasks.push({
            taskText: taskText,
            completed: false
        });
        this.showTasks();
    },
    changeTask: function(position,taskText){
        this.tasks[position].taskText = taskText;
        this.showTasks();
    },
    removeTask: function(position){
        this.tasks.splice(position,1);
        this.showTasks();
    },
    toggleCompleted: function(position){
        var task = this.tasks[position];
        task.completed = !task.completed;
        this.showTasks();
    },

    toggleAll: function(){
        var completedTasks = 0;
        var totalTasks = this.tasks.length;

        //get number completed tasks
        for( var i = 0; i < totalTasks; i++){
            if( this.tasks[i].completed === true){
                completedTasks++;
            }
        }
        //makes true or false
        if (completedTasks === totalTasks){
            for(var i = 0; i < totalTasks; i++){
                this.tasks[i].completed = false;
            }
            } else {
                for(var i = 0; i < totalTasks; i++){
                    this.tasks[i].completed = true;
            }
        }
            this.showTasks();
        
    }
}
var handlers = {
    showTasks: function(){
        taskList.showTasks();
    },
    toggleAll: function(){
        taskList.toggleAll();
    },
    addTask: function(){
        var addNewTask = document.getElementById('addNewTask');
        taskList.addTask(addNewTask.value);
        addNewTask.value= "";
    }
}