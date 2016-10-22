import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { TaskService, Task } from '../../shared';

@Injectable()
export class ListTasksResolver implements Resolve<Array<Task>> {

    constructor(private router: Router, private taskService: TaskService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.taskService.get()
            .then(response => response)
            .catch(error => {
                console.error(error);
                return false;
            });
    }
}
