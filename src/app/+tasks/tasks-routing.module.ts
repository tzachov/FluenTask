import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TasksModule } from './tasks.module';
import { TasksComponent } from './tasks.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
    imports: [
        TasksModule,
        RouterModule.forChild([
            {
                path: 'tasks', component: TasksComponent, children: [
                    { path: '', component: ListTasksComponent },
                    { path: 'add', component: AddTaskComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class TasksRoutingModule { }
