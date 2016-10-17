import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { TaskService } from './services';
import { TaskInputComponent } from './components';

@NgModule({
    imports: [BrowserModule, FormsModule, MaterialModule],
    declarations: [TaskInputComponent],
    exports: [TaskInputComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [TaskService]
        };
    }
}
