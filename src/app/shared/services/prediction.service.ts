import { Injectable } from '@angular/core';

import { TaskInputPrediction } from '../models/task-input-prediction';

@Injectable()
export class PredictionService {
  private predictions: TaskInputPrediction[] = [
    { type: 'action', text: 'create', next: 'create' },
    { type: 'action', text: 'complete', next: 'complete' },
    { type: 'action', text: 'email', next: '~contactlist'},
    { type: 'complete', text: 'task', next: '~tasklist' }
  ];

  get(prediction: TaskInputPrediction = null): Promise<TaskInputPrediction[]> {
    if (prediction === null) {
      prediction = new TaskInputPrediction();
      prediction.next = 'action';
    }
    let values = this.predictions.filter((p: TaskInputPrediction) => p.type === prediction.next);
    console.debug('[PredictionService] get()', values);
    return Promise.resolve(values);
  }
}