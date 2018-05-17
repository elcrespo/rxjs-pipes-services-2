import { FeatureService } from './../feature.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Observer, Subscription } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.css']
})
export class Feature1Component implements OnInit, OnDestroy {
  myNumberSubscription: Subscription;
  myCustomObservableSubscription: Subscription;

  constructor(private _featureService: FeatureService) { }

  ngOnInit() {
    const myNumbers = interval(1000).pipe(filter((value) => value % 2 === 0), map((value) => value * 2));
    this.myNumberSubscription = myNumbers.subscribe((num) => {
      console.log('Number', num);
    });

    const myCustomObservable = Observable.create((observer: Observer<string>) => {
      setTimeout( () => {
        observer.next('First Value');
      }, 2000);

      setTimeout( () => {
        observer.next('Second Value');
      }, 4000);

      setTimeout( () => {
        observer.error('upps!!');
      }, 5000);
    });
    this.myCustomObservableSubscription = myCustomObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
    // switchmap
    const saveUser$ = this._featureService.simulateHttp(' user saved ', 1000);
    const httpResult$ = saveUser$.pipe(switchMap(sourceValue => {
      console.log(sourceValue);
      return this._featureService.simulateHttp(' data reloaded ', 2000);
    }));

    httpResult$.subscribe(
      console.log,
      console.error,
      () => console.log('completed httpResult$')
  );
  }

  ngOnDestroy() {
    this.myNumberSubscription.unsubscribe();
    this.myCustomObservableSubscription.unsubscribe();
  }
}
