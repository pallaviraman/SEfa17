import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

import 'rxjs/add/operator/filter';


// import { MapModifierService } from './services/mapmodifier/map-modifier.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
   ) {
    // private latServ: MapModifierService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
      iconRegistry.addSvgIcon( 'logo',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/logo.svg'));
  }

  ngOnInit() {
  }

}
