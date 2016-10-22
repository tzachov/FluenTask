import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TasksComponent } from './tasks.component';
import { ListTasksComponent, ListTasksResolver } from './list-tasks';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: TasksComponent, children: [
                    { path: '', component: ListTasksComponent, resolve: [ListTasksResolver] },
                    { path: 'add', component: AddTaskComponent }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class TasksRoutingModule { }
