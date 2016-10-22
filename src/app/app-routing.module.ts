import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { HomeModule } from './+home/home.module';

const ROUTES = [
  { path: 'tasks', loadChildren: 'app/+tasks/tasks.module' },
  { path: 'profile', loadChildren: 'app/+profile/profile.module' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
        HomeModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
