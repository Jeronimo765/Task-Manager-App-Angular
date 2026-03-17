import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks: Task[] = [];

  addTask(task: Task) {
    this.tasks.push(task);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  completeTask(id: number) {

    const task = this.tasks.find(t => t.id === id);

    if (task) {
      task.completed = true;
    }

  }

  totalTasks() {
    return this.tasks.length;
  }

  completedTasks() {
    return this.tasks.filter(t => t.completed).length;
  }

  pendingTasks() {
    return this.tasks.filter(t => !t.completed).length;
  }

}