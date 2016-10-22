import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeModule } from './+home/home.module';

const ROUTES = [];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES), HomeModule]
})
export class AppRoutingModule { }
