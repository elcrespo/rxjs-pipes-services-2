import { FeatureService } from './feature.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  feature1Activated = false;
  feature2Activated = false;

  constructor(private _featureService: FeatureService) {}

  ngOnInit() {
    this._featureService.featureActivated.subscribe((id: number) => {
      if (id === 1 ) {
        this.feature1Activated = true;
      } else if (id === 2) {
        this.feature2Activated = true;
      }
    });
  }
}
