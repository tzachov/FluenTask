import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

const ROUTES = [
    { path: '', component: ProfileComponent }
];

const PROFILE_COMPONENTS = [
    ProfileComponent
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        ...PROFILE_COMPONENTS
    ],
    exports: [
        RouterModule,
        ...PROFILE_COMPONENTS
    ]
})
export class ProfileRoutingModule { }
