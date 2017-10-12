import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl
} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AgmCoreModule} from '@agm/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './custom-material/custom-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';

import 'hammerjs';
import { SelectorComponent } from './components/selector/selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSFMoD5C6VpWI6D7uZd-OfvuZBUc8cdj8',
      libraries: ['places']
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
