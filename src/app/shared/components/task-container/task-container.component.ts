import { Component, OnInit, ViewChild } from '@angular/core';
import { TasksService } from '../../../tasks.service';
import { Task } from '../../../core/models/task.model';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';
import {
  Modal,
  Ripple,
  initTE,
} from 'tw-elements';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent implements OnInit {
  // ViewChild te permite hacer referencia a una instancia de un componente hijo
  @ViewChild(AddTaskModalComponent) addTaskModal: AddTaskModalComponent;

  closeModal: boolean = false;
  tasks: Task[] = [];
  constructor (private tasksService: TasksService) {}
  ngOnInit(): void {
    initTE({ Modal, Ripple });
    this.tasksService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    })
  }
  deleteTask(taskId: number) {
    this.tasksService.deleteTask(taskId);
  }

  onAddTask(task: Task) {
    this.tasksService.addTask(task);
  }

  updateTaskStatus(taskId) {
    console.log('estoy en taskContainer y el status de una task ha cambiado', taskId);
    this.tasksService.taskStatusHasChanged(taskId);
  }
}
