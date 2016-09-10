/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { PredictionService } from './prediction.service';

describe('Service: Prediction', () => {
  beforeEach(() => {
    addProviders([PredictionService]);
  });

  it('should ...',
    inject([PredictionService],
      (service: PredictionService) => {
        expect(service).toBeTruthy();
      }));
});
