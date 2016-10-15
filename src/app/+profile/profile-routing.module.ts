import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileModule } from './profile.module';
import { ProfileComponent } from './profile.component';

@NgModule({
    imports: [
        ProfileModule,
        RouterModule.forRoot([
            { path: 'profile', component: ProfileComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ProfileRoutingModule { }
