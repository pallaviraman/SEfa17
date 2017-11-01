import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  myData: Array<any> = [];

  myDataURL: Array<string> = [];
  urlCounter: number = 0;

  res: Object;
  imgUrl: string = 'https://source.unsplash.com/random/800x600';
  // uri: number = 0;

  constructor(private http: HttpClient) {
    this.http.get('http://174.64.102.57:3000/leasemetadata')
    .subscribe(res => {
      this.res = res;
      [].push.apply(this.myData, res);
    });

    setInterval((): void => {
      this.imgUrl = 'http://174.64.102.57:3000/uploads/' + this.extractURL(this.myData[this.urlCounter]);
      this.urlCounter++;
      this.urlCounter %= 10;
      console.log(this.urlCounter);
      console.log(this.imgUrl);
    }, 3000);
   }

   extractURL(x: object): string {
    const s: string = JSON.stringify(x);

    interface MyObj {
      _index: string;
      _type: string;
      _id: string;
      _score: number;
      _source: {
        searchid: number;
        title: string;
        rent: string;
        geolocation: {
          lat: number;
          long: number;
        };
        images: Array<string>;
      };
      // albumId: number;
      // id: number;
      // title: string;
      // url: string;
      // thumbnailUrl: string;
    }

    const obj: MyObj = JSON.parse(s);
    return obj._source.images[0];
  }

  ngOnInit() {
  }

}
