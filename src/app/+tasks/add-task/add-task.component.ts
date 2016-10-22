import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TaskService } from '../../shared';

@Component({
  selector: 'fluentask-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }

  save = (task: any) => {
    console.log('saving task', task);
    return this.taskService.add(task)
      .then(() => this.router.navigate(['/tasks/list']));
  }
}
