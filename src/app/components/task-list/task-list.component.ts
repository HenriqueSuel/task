import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  isVisible = true;

  @Input() tasks: Task[] = [];
  @Output() handleTask = new EventEmitter();

  mostrarLista() {
    this.isVisible = !this.isVisible;
  }

  selectedTask(task: Task) {
    this.handleTask.emit(task);
  }
}
