import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parallel Array';
//...............................................
  //Task = [{TaskName:"Jump", Priority:"High"}, 
      //   {TaskName:"Sleep", Priority:"Medium"},
      //   {TaskName:"Clean", Priority:"Low"}]
  Task = []

  TaskNames : string;
  PriorityNames: string;
  empty = true

  AddNewTask(){
    this.Task.push({TaskName:this.TaskNames,Priority:this.PriorityNames})
    this.TaskNames = ""
    this.PriorityNames =""
    if (this.Task.length >0)
    {this.empty = false}
}


  RemoveTask(Task){
   let index = this.Task.indexOf(Task)
    this.Task.splice(index, 1)
        if (this.Task.length <=0){
             this.empty= true}
  }

  EditTask(Task){
    let index = this.Task.indexOf(Task)  
    let newName = prompt("Please enter your new Task Name",this.TaskNames);
    let newPriority = prompt("Please enter your new Priority", this.PriorityNames);
      
    if (newName != null && newPriority !=null) { 
        this.Task[index].TaskName = newName;
        this.Task[index].Priority = newPriority;       
   }
   }
  }
