import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BasicDetails } from './subleaseForm01';


@Injectable()
export class HouseListingService {
  public listingArray: Array<any> = [];
  public latLngArray: Array<Marker> = [];
  public URL = 'http://174.64.102.57:3000/';
  res: Object;

  model = new BasicDetails('', '', '', '', '', '','', '', '', true, false, true, false, true, true,
  true, false, true, true, false, true, true, true, true, true, true);

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

  onSubmit() {
    interface ResponseInterface {
      _id: string;
     }

    const req = this.http.post<ResponseInterface>('http://174.64.102.57:3000/add', this.model)
    .subscribe(
      res => {
        console.log(res);
        this.http.get('http://174.64.102.57:3000').subscribe(
          res1 => {
            console.log(res1);
          },
          err1 => {
            console.log(err1);
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }
}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface ResponseInterface {
  _id: string;
 }