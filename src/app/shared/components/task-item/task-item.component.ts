import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() delete = new EventEmitter<number>();
  @Output() updateTaskStatus = new EventEmitter<number>();

  onDelete(id: number) {
    this.delete.emit(id);
  }
  onCheckboxChange(id: number) {
    this.updateTaskStatus.emit(id);
  }
  constructor() { }

  ngOnInit(): void {
  }
}
