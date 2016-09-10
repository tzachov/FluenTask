/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('Service: Task', () => {
  beforeEach(() => {
    addProviders([TaskService]);
  });

  it('should ...',
    inject([TaskService],
      (service: TaskService) => {
        expect(service).toBeTruthy();
      }));
});
