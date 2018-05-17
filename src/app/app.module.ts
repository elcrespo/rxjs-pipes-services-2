import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Feature1Component } from './feature1/feature1.component';
import { Feature2Component } from './feature2/feature2.component';
import { FeatureService } from './feature.service';

@NgModule({
  declarations: [
    AppComponent,
    Feature1Component,
    Feature2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FeatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
