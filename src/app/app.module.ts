import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProfileRoutingModule } from './+profile/profile-routing.module';
import { HomeRoutingModule } from './+home/home-routing.module';
import { TasksRoutingModule } from './+tasks/tasks-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    SharedModule.forRoot(),
    HomeRoutingModule,
    ProfileRoutingModule,
    TasksRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
