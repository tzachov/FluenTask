import { Injectable } from '@angular/core';

import { Task } from '../models';

@Injectable()
export class TaskService {
  private tasks: Array<Task> = [
    new Task(1, 'Meet with (Tal Fadlon) at (Conference Room 1) on 13:00'),
    new Task(2, 'Email (Roy Mashiah) about client-side testing'),
    new Task(3, 'Complete task (Create Product API)')
  ];

  constructor() { }

  get(): Promise<Task[]> {
    return Promise.resolve(this.tasks);
  }

  add(task: any) {
    this.tasks.push(task);
    return Promise.resolve();
  }
}
