import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl
} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {AgmCoreModule} from '@agm/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './custom-material/custom-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';

import 'hammerjs';
import { SelectorComponent } from './components/selector/selector.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AgmMapComponent } from './components/agm-map/agm-map.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    CarouselComponent,
    AgmMapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSFMoD5C6VpWI6D7uZd-OfvuZBUc8cdj8',
      libraries: ['places']
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-US'},
  ],
  entryComponents: [SelectorComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
