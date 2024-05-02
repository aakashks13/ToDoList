// simple to-do app
let todoList = [];
let request = prompt("Your Request please").toLowerCase().trim();
for(let i = 0; ; i++){
   if(request === "done"){
        console.log("All changes saved");
        break;
    }
    if(request === "list"){
        if(todoList.length === 0){
            console.log("No Task to show")
        }else{
            for(let i = 0; i < todoList.length; i++){
                console.log(i, todoList[i]);
            }
        }
    }else if(request === "add"){
        let addTask = prompt("Add your Task");
        todoList.push(addTask);
        console.log("Task Added");
    }else if(request === "delete"){
        let deleteTask = Number(prompt("Enter index Number"));
        if(deleteTask >= todoList.length){
            console.log("No such index exist in your todo List");
        }else{
            todoList.splice(deleteTask, 1);
            console.log(`Task with index ${deleteTask} deleted`);
        }
    }else if(request === "reset"){
        todoList.splice(0, todoList.length);
        console.log("All Tasks removed");
    }else{
        console.log("Wrong Request");
    }
    request = prompt("Your Request Please").toLowerCase().trim();
}
