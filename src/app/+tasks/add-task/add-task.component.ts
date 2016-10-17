import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fluentask-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  save(task: any) {
    console.log('saving task', task);
    return Promise.resolve(true);
  }
}
