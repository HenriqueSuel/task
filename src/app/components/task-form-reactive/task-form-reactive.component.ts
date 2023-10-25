import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form-reactive',
  templateUrl: './task-form-reactive.component.html',
  styleUrls: ['./task-form-reactive.component.scss'],
})
export class TaskFormReactiveComponent {
  @Input() isEdit: boolean = false;

  public formTask: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    date: ['', Validators.required],
    status: ['toDo', Validators.required],
  });

  @Output() addTask = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  submitTask() {
    if (this.formTask.invalid) return;
    this.addTask.emit(this.formTask.value);
    this.formTask.reset();
  }
}
