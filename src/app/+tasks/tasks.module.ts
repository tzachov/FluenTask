import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { TasksRoutingModule } from './tasks-routing.module';

import { TasksComponent } from './tasks.component';
import { ListTasksComponent, ListTasksResolver } from './list-tasks';
import { AddTaskComponent } from './add-task/add-task.component';

const TASKS_COMPONENTS = [
  TasksComponent,
  ListTasksComponent,
  AddTaskComponent
];

const TASKS_PROVIDERS = [
  ListTasksResolver
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    TasksRoutingModule
  ],
  declarations: [
    ...TASKS_COMPONENTS
  ],
  providers: [
    ...TASKS_PROVIDERS
  ]
})
export default class TasksModule { }
