import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskContainerComponent } from './components/task-container/task-container.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskContainerComponent,
    TaskItemComponent,
    AddTaskModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskContainerComponent,
    TaskItemComponent
  ]
})
export class SharedModule { }
