import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import * as L from 'leaflet';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';


@Component({
  selector: 'app-leafletmap',
  templateUrl: './leafletmap.component.html',
  styleUrls: ['./leafletmap.component.css']
})

export class LeafletmapComponent implements OnInit {

  // google maps zoom level
  zoom: number = 8;
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  markers: Marker[] = [
    // {
    //   lat: 51.673858,
    //   lng: 7.815982,
    //   label: 'A',
    //   draggable: true
    // },
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
  ]

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: AGMMouseEvent) {
    this.markers.length = 0;
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

  constructor() { }

  ngOnInit() {
  }

}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
