import { Train } from './interfaces/train.interface';
import { Values } from './values';
export class JourneyCalculator {
  private timetable: Train[];
  constructor(timetable: Train[]) {
    this.timetable = timetable;
  }

  public getNextTrainTime(location: string, destination: string): string {
    let doesTrainForStartLocationExists: boolean = false;
    let doesTrainForDestinationLocationExists: boolean = false;

    this.timetable.forEach((train) => {
      const trainStop = train.stops.find((s) => s.location == location);
      if (trainStop) {
        doesTrainForStartLocationExists = true;
      }
    });

    if (doesTrainForStartLocationExists) {
      return '10:00';
    }
    return Values.noTrainsMessage;
  }

  public getCurrentTime(): string {
    return '';
  }
}
