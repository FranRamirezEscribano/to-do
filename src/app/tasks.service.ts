import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './core/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private initialTasks: Task[] = [
    {
      id: 2000,
      title: 'Task',
      description: 'Do something',
      done: false
    },
    {
      id: 1,
      title: 'Task',
      description: 'Do something',
      done: true
    },
    {
      id: 2,
      title: 'Task',
      description: 'Do something',
      done: false
    }
  ]
  private tasksSubject = new BehaviorSubject<Task[]>(this.initialTasks);
  tasks$ = this.tasksSubject.asObservable();

  constructor() { }

  // Add task
  addTask(task: Task): void {
    const currentTasks = this.tasksSubject.getValue();
    this.tasksSubject.next([...currentTasks, task]);
  }

  // Delete task
  deleteTask(id: number): void {
    const currentTasks = this.tasksSubject.getValue();
    this.tasksSubject.next(currentTasks.filter(task => task.id !== id));
  }

   // Update task
  updateTask(updatedTask: Task): void {
    const currentTasks = this.tasksSubject.getValue();
    const taskIndex = currentTasks.findIndex(task => task.id === updatedTask.id);
    currentTasks[taskIndex] = updatedTask;
    this.tasksSubject.next([...currentTasks]);

    console.log('TASKS DESPUES DE UPDATE', this.tasksSubject.getValue());
  }

  // Mark task as completed.
  taskStatusHasChanged(id: number): void {
    const currentTasks = this.tasksSubject.getValue();
    const task = currentTasks.find(task => task.id === id);
    if (task) {
      this.updateTask(task);
    }
  }
}
