import { Injectable } from '@angular/core';

@Injectable()
export class HouseListingService {
  public listingArray: Array<any> = [];
  public latLngArray: Array<Marker> = [];

  constructor() { }

}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
