import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Task } from '../../shared';

@Component({
  selector: 'fluentask-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks: Array<Task> = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach((data: { items: Array<Task> }) => {
      this.tasks = data.items;
    });
  }

}
