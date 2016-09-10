import { Component } from '@angular/core';

import { TaskInputComponent } from './shared/components/task-input.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TaskInputComponent]
})
export class AppComponent {
  title = 'FluenTask';
}
