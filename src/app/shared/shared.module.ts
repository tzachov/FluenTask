import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TaskService } from './services';
import { TaskInputComponent } from './components';

@NgModule({
    imports: [BrowserModule, FormsModule],
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
