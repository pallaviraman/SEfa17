import { HouseListingService } from './../../house-listing.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  // myData: Array<any> = [];
  // address = this.data.

  // myDataURL: Array<string> = [];
  // urlCounter: number = 0;

  // res: Object;
  // imgUrl: string = 'https://source.unsplash.com/random/800x600';
  // uri: number = 0;

  constructor(private http: HttpClient, private data: HouseListingService) {
    // data.listingArray.length = 0;
    // this.http.get('http://174.64.102.57:3000/leasemetadata/')
    // .subscribe(res => {
    //   this.res = res;
    //   [].push.apply(data.listingArray, res);
    //   // const temp = JSON.stringify(res[0]);
    //   // const t = JSON.parse(temp);
    //   // console.log(t._source.geolocation.lat);
    //   const a = JSON.stringify(res);
    //   const b = JSON.parse(a);

    //   for (const entry of b) {
    //     const temp = JSON.stringify(entry);
    //     const t = JSON.parse(temp);

    //     const lat: number =  t._source.geolocation.lat;
    //     const lng: number =  t._source.geolocation.lon;
    //     const label: string = 'A';
    //     const draggable: boolean = false;

    //     data.latLngArray.push({
    //      lat, lng, label, draggable
    //     });
    //   }
    // });

    // console.log(data.latLngArray);

    // setInterval((): void => {
    //   this.imgUrl = 'http://70.171.46.158:3000/uploads/' + this.extractURL(this.myData[this.urlCounter]);
    //   this.urlCounter++;
    //   this.urlCounter %= 10;
    //   console.log(this.urlCounter);
    //   console.log(this.imgUrl);
    // }, 3000);
   }

  //  extractURL(x: object): string {
  //   const s: string = JSON.stringify(x);

  //   interface MyObj {
  //     _index: string;
  //     _type: string;
  //     _id: string;
  //     _score: number;
  //     _source: {
  //       searchid: number;
  //       title: string;
  //       rent: string;
  //       geolocation: {
  //         lat: number;
  //         long: number;
  //       };
  //       images: Array<string>;
  //     };
  //     // albumId: number;
  //     // id: number;
  //     // title: string;
  //     // url: string;
  //     // thumbnailUrl: string;
  //   }

  //   const obj: MyObj = JSON.parse(s);
  //   return obj._source.images[0];
  // }

  ngOnInit() {
  }

}
