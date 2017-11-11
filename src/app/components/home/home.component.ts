import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';

import { HouseListingService } from './../../house-listing.service';

// import { SelectorComponent } from '../selector/selector.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  animalControl = new FormControl('', [Validators.required]);
  
    animals = [
      {name: 'Dog', sound: 'Woof!'},
      {name: 'Cat', sound: 'Meow!'},
      {name: 'Cow', sound: 'Moo!'},
      {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
    ];

  res: Object;
  header: string = 'Gator Housing';

  startDate: Date = new Date();
  endDate: Date = new Date();

  someRange: number[] = [100, 1000];

  // google maps zoom level
  zoom: number = 8;
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  // markers: Marker[] = this.data.latLngArray;
  markers: Marker[] = [
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    },
    // {
    //   lat: this.data.latLngArray[0].lat,
    //   lng: this.data.latLngArray[0].lng,
    //   label: 'A',
    //   draggable: true
    // }
    // {
    //   lat: this.data.latLngArray[1].lat,
    //   lng: this.data.latLngArray[1].lng,
    //   label: 'A',
    //   draggable: true
    // },
    // {
    //   lat: this.data.latLngArray[2].lat,
    //   lng: this.data.latLngArray[2].lng,
    //   label: 'A',
    //   draggable: true
    // },
    // {
    //   lat: this.data.latLngArray[3].lat,
    //   lng: this.data.latLngArray[3].lng,
    //   label: 'A',
    //   draggable: true
    // },
    // {
    //   lat: this.data.latLngArray[4].lat,
    //   lng: this.data.latLngArray[4].lng,
    //   label: 'A',
    //   draggable: true
    // },
    // {
    //   lat: this.data.latLngArray[5].lat,
    //   lng: this.data.latLngArray[5].lng,
    //   label: 'A',
    //   draggable: true
    // },
    // {
    //   lat: this.data.latLngArray[6].lat,
    //   lng: this.data.latLngArray[6].lng,
    //   label: 'A',
    //   draggable: true
    // },
    // {
    //   lat: this.data.latLngArray[7].lat,
    //   lng: this.data.latLngArray[7].lng,
    //   label: 'A',
    //   draggable: true
    // }
  ]
    // {
    //   lat: 51.373858,
    //   lng: 7.215982,
    //   label: 'B',
    //   draggable: false
    // },
    // {
    //   lat: 51.723858,
    //   lng: 7.895982,
    //   label: 'C',
    //   draggable: true
    // }

  public searchControl: FormControl;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: AGMMouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      label: 'D',
      draggable: true
    });
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  popMarkers (a: Marker[] ) {
    for (const entry of a ) {
      this.markers.push(entry);
    }
  }

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private data: HouseListingService,
    private http: HttpClient
    // private dialog: MatDialog
  ) {
   }

  ngOnInit() {
    // set google maps defaults
    console.log(this.data.latLngArray);
    this.popMarkers(this.data.latLngArray);
    this.zoom = 4;
    this.lat = 39.8282;
    this.lng = -98.5795;

    // for (const entry of this.data.listingArray) {
    //   console.log(entry);
    //   // this.markers.push({});
    // }
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
          this.lat = place.geometry.location.lat();
          // this.latServ.currentLat.subscribe
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
          // this.popMarkers();
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

  onStartDateChange() {
  }

  onEndDateChange() {
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
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
