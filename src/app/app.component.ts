import { Component } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listTask: Task[] = [];
  // listTask: Array<IListTask> = [];
  selectedTask: Task | null = null;


  ngOnInit() {
    console.log(this.selectedTask)
  }


  onAddTask(task: Task) {
    this.listTask.push(task);
  }

  handleTask(task: Task) {
    this.selectedTask = task;
  }

  fecharDetalhes() {
    this.selectedTask = null;
  }
}
