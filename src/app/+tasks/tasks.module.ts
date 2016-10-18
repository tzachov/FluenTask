import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { TasksComponent } from './tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTasksComponent, ListTasksResolver } from './list-tasks';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [TasksComponent, AddTaskComponent, ListTasksComponent],
  providers: [ListTasksResolver]
})
export class TasksModule { }
