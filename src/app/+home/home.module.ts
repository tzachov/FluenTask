import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
