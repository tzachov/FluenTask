import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { TasksComponent } from './tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [TasksComponent, AddTaskComponent, ListTasksComponent]
})
export class TasksModule { }
