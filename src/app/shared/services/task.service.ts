import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  private tasks = [
    { id: 1, title: 'Meet with (Tal Fadlon) at (Conference Room 1) on 13:00' },
    { id: 2, title: 'Email (Roy Mashiah) about client-side testing' },
    { id: 3, title: 'Complete task (Create Product API)' }
  ];

  constructor() { }

  get() {
    return Promise.resolve(this.tasks);
  }
}
