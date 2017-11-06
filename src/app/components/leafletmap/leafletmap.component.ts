import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import * as L from 'leaflet';


@Component({
  selector: 'app-leafletmap',
  templateUrl: './leafletmap.component.html',
  styleUrls: ['./leafletmap.component.css']
})

export class LeafletmapComponent implements OnInit {
//   private map: L.Map;

//   options = {
//           layers: [
//               L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 15 })
//           ],
//           zoom: 4,
//           center: L.latLng([39.878868, -100.357010])
//       };

//   onMapReady(map: L.Map) {
//       this.map = map;
//   }
  constructor() { }

  ngOnInit() {
  }

}
