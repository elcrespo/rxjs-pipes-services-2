import { Subject, of, interval } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export class FeatureService {
    featureActivated = new Subject();

    simulateHttp(val: any, delayNumber: number) {
      return of(val).pipe(delay(delayNumber));
    }

    simulateLongLiveStream(val: any, delayNumber: number) {
      return interval(delayNumber).pipe(map(index => val + ' ' + index));
  }
}
