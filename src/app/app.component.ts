import {Component} from '@angular/core';
import {MatIconRegistry, MatDialog} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

import 'rxjs/add/operator/filter';

import {DialogComponent} from './dialog/dialog.component';

/**
 * @title Basic datepicker
 */
// @Component({
//   selector: 'datepicker-overview-example',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class DatepickerOverviewExample {}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users = [
    {
      name: 'Saptarshi',
      avatar: 'svg-12',
      subleasing: false,
      lookingForSublease: true
    },

    {
      name: 'Pallavi Raman',
      avatar: 'svg-13',
      subleasing: true,
      lookingForSublease: true
    },

    {
      name: 'Meghana Madineni',
      avatar: 'svg-11',
      subleasing: true,
      lookingForSublease: false
    },

    {
      name: 'Dilip K',
      avatar: 'svg-14',
      subleasing: false,
      lookingForSublease: false
    },
  ];

  selectedUser = this.users[0];
  isDarkTheme = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialog: MatDialog) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');

    iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }

  openAdminDialog() {
    this.dialog.open(DialogComponent).afterClosed()
      .filter(result => !!result)
      .subscribe(user => {
        this.users.push(user);
        this.selectedUser = user;
      });
  }
}
