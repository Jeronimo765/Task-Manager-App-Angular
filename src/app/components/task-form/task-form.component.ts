import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {

  title: string = '';
  description: string = '';
  priority: string = 'Media';

  @Output() taskCreated = new EventEmitter<Task>();

  addTask() {

    const newTask: Task = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      priority: this.priority,
      completed: false
    };

    this.taskCreated.emit(newTask);

    this.title = '';
    this.description = '';
    this.priority = 'Media';
  }


}