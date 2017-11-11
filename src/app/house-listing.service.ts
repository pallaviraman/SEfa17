import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HouseListingService {
  public listingArray: Array<any> = [];
  public latLngArray: Array<Marker> = [];
  public URL = 'http://174.64.102.57:3000/';
  res: Object;

  constructor(
    private http: HttpClient
  ) {
    this.http.get('http://174.64.102.57:3000/leasemetadata/')
    .subscribe(res => {
      this.res = res;
      [].push.apply(this.listingArray, res);
      // const temp = JSON.stringify(res[0]);
      // const t = JSON.parse(temp);
      // console.log(t._source.geolocation.lat);
      const a = JSON.stringify(res);
      const b = JSON.parse(a);

      for (const entry of b) {
        const temp = JSON.stringify(entry);
        const t = JSON.parse(temp);

        const lat: number =  t._source.geolocation.lat;
        const lng: number =  t._source.geolocation.lon;
        const label: string = 'A';
        const draggable: boolean = false;

        this.latLngArray.push({
         lat, lng, label, draggable
        });
      }
    });
  }
}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
