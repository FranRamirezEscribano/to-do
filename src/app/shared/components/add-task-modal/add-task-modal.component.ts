import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent {
  @Output() addTask = new EventEmitter<any>();
  show = false;
  task: Task = {
    id: 0,
    title: '',
    description: '',
    done: false
  };

  open() {
    this.show = true;
  }

  close() {
    this.show = false;
  }

  submitTask() {
    if (this.task.title && this.task.description) {
      this.task.id = this.generateRandomId();
      this.addTask.emit(this.task);
      this.close();
      this.task = { id: 0, title: '', description: '', done: false }; // Reset the task
    }
  }
  generateRandomId() {
    return Math.random();
  }
}
