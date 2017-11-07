import { HttpClient } from '@angular/common/http';
import { Component, OnInit,  ElementRef, NgZone, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';

import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

import { HouseListingService } from './../../house-listing.service';

// import { SelectorComponent } from '../selector/selector.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  res: Object;
  header: string = 'Gator Housing';

  startDate: Date = new Date();
  endDate: Date = new Date ();

  favoriteSeason: string;

    seasons = [
      'Winter',
      'Spring',
      'Summer',
      'Autumn',
    ];

    someRange: number[] = [100, 1000];

  public latitude: number;
  public longitude: number;
  public zoom: number;

  public searchControl: FormControl;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private data: HouseListingService,
    private http: HttpClient
    // private dialog: MatDialog
  ) { }

    ngOnInit() {
      // set google maps defaults
      this.zoom = 4;
      this.latitude = 39.8282;
      this.longitude = -98.5795;

      // create search FormControl
      this.searchControl = new FormControl();

      // set current position
      this.setCurrentPosition();

      // load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ['address']
        });
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            // get the place result
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();

            // verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }

            // set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            // this.latServ.currentLat.subscribe
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
          });
        });
      });
    }

    // openDialog() {
    //   this.dialog.open(SelectorComponent);
    // }


    onChange(e: Event) {
      // console.log(this.someRange);
    }

    onRangeApply() {
      this.data.listingArray.length = 0;
      this.http.get('http://174.64.102.57:3000/price?min=' + this.someRange[0] + '&max=' + this.someRange[1] + '/')
      .subscribe(res => {
        this.res = res;
        console.log(res);
        [].push.apply(this.data.listingArray, res);
      });
      // console.log(this.someRange);

    }

    onStartDateChange () {
    }

    onEndDateChange () {
      this.data.listingArray.length = 0;
      this.http.get('http://174.64.102.57:3000/date?min='
      + this.startDate.getFullYear() + '-' + (this.startDate.getMonth() + 1)
       + '&max=' + this.endDate.getFullYear() + '-' + (this.endDate.getMonth() + 1))
      .subscribe(res => {
        this.res = res;
        console.log(res);
        [].push.apply(this.data.listingArray, res);
      });
      // console.log(this.startDate.getMonth() + ' ' + this.endDate.getMonth());
    }

    private setCurrentPosition() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 12;
        });
      }
    }

}
