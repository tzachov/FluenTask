export class TaskInputPrediction {
    constructor(
        public text?: string,
        public type = 'text',
        public next: string = null) {
    }
}
