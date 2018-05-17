import { FeatureService } from './../feature.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.css']
})
export class Feature2Component implements OnInit {
  id: number;

  constructor(private _route: ActivatedRoute, private _featureService: FeatureService) { }

  ngOnInit() {
    this._route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

  onActivate(id) {
    this._featureService.featureActivated.next(id);
  }

}
