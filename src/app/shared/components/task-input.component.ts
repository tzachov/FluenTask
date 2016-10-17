import { Component, OnInit, Input } from '@angular/core';

import { TaskInputPrediction } from '../models/task-input-prediction';
import { PredictionService } from '../services/prediction.service';
import { TaskService } from '../services/task.service';
import { PredictionViewType } from '../enums/prediction-view-type.enum';

export class TaskInputData {
    title: string;
    parts: TaskInputPrediction[];
}

type SaveTaskFunction = (task: TaskInputData) => Promise<boolean>;

@Component({
    selector: 'fluentask-task-input',
    templateUrl: 'task-input.component.html',
    styleUrls: ['task-input.component.css'],
    providers: [PredictionService]
})
export class TaskInputComponent implements OnInit {
    
    @Input() saveTask: SaveTaskFunction;

    task: TaskInputData = new TaskInputData();
    predictions: TaskInputPrediction[];
    predictionsView = PredictionViewType.list;
    userInput: TaskInputPrediction = new TaskInputPrediction();

    constructor(
        private predictionService: PredictionService,
        private taskService: TaskService) {
    }

    ngOnInit() {
        this.task.parts = [];
        this.loadPredictions();
    }

    addPrediction(prediction: TaskInputPrediction) {
        this.task.parts.push(prediction);
        if (prediction.next !== null && prediction.next.substring(0, 1) === '~') {
            let action = prediction.next.substr(1).toLowerCase();
            console.log('action', action);
            this.predictions = [];
            this.invokeAction(action);
        } else {
            this.loadPredictions(prediction);
        }

        this.updateTaskTitle();
        this.userInput = new TaskInputPrediction(null);
    }

    onUserInputKeyUp(e: KeyboardEvent) {
        console.log('keypress', e.which);
        const BACKSPACE_KEY = 8;
        const SPACE_KEY = 32;

        if (e.which === BACKSPACE_KEY && (this.userInput.text === null || this.userInput.text === '')) {
            console.log('this.userInput.text', this.userInput.text);
            this.task.parts.pop(); // remove the last item
            let item = this.task.parts[this.task.parts.length - 1]; // set current last item
            console.log('item', item);
            if (item === undefined || item === null) {
                this.userInput = new TaskInputPrediction(null);
            }

            this.loadPredictions(item);
            this.updateTaskTitle();
        }

        if (e.which !== SPACE_KEY) {
            return;
        }

        console.log('value', this.userInput);

        let value = this.userInput.text.trim();

        let pred = this.predictions.filter(p => p.text.toLowerCase() === value.toLowerCase());
        if (pred.length > 0) {
            this.addPrediction(pred[0]);
        } else {
            this.task.parts.push(new TaskInputPrediction(value));
            this.updateTaskTitle();
            this.userInput = new TaskInputPrediction(null);
        }

        return false;
    }

    save() {
        this.showSpinner();
        this.saveTask(this.task)
            .then(response => this.hideSpinner())
            .catch(error => {
                this.hideSpinner();
                this.showError(error);
            });
    }

private showSpinner() {

}

private hideSpinner() {

}

private showError(error: string) {
    // TODO: replace with toast
    alert(error);
}

    private loadPredictions(prediction: TaskInputPrediction = null) {
        this.predictionsView = PredictionViewType.inline;
        this.predictionService.get(prediction)
            .then((results) => this.predictions = results);
    }

    private updateTaskTitle() {
        let values = [];
        this.task.parts.map((p: TaskInputPrediction) => values.push(p.text));
        this.task.title = values.join(' ');
    }

    private invokeAction(actionName: string) {
        let action = this[actionName];
        if (action && action !== null) {
            console.debug('invoking ' + actionName);
            action();
        } else {
            console.debug(actionName + ' not found');
        }
    }

    private getTaskListPredictions(tasks) {
        this.predictions = [];
        tasks.map(p => this.predictions.push(new TaskInputPrediction(p.title, 'task')));
        // this.predictionsView = PredictionViewType.list;
    }

    private tasklist = (): void => {
        this.taskService.get()
            .then((response) => this.getTaskListPredictions(response));
    }

    private contactlist = (): void => {
        let contacts = [
            'tzachovadia@gmail.com',
            'another@mail.com',
            'fake@mail.co.uk'
        ];

        this.predictions = [];
        contacts.map(p => this.predictions.push(new TaskInputPrediction(p, null, 'contact')));
        //this.predictionsView = PredictionViewType.list;
    }
}
