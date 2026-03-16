import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input() tasks: Task[] = [];

  @Output() deleteTask = new EventEmitter<number>();

  @Output() completeTask = new EventEmitter<number>();

  onDelete(id: number) {
    this.deleteTask.emit(id);
  }

  onComplete(id: number) {
    this.completeTask.emit(id);
  }
}