import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  myData: Array<any> = [];
  // myDataURL: Array<string> = [];
  // urlCounter: number = 0;

  res: Object;
  imgUrl: string = 'https://source.unsplash.com/random/800x600';
  // uri: number = 0;

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
    .subscribe(res => {
      this.res = res;
      [].push.apply(this.myData, res);
    });

    // for (let entry of this.myData) {
    //   this.myDataURL[this.urlCounter] = this.extractJSONurl(entry);
    //   this.urlCounter++;
    // }
    // setInterval((): void => {
    //   this.imgUrl = this.extractURL(this.myData[this.urlCounter]);
    //   this.urlCounter++;
    //   this.urlCounter %= 10;
    //   console.log(this.urlCounter);
    //   console.log(this.imgUrl);
    // }, 3000);
   }

  //  extractJSONurl(x: object): string {
  //   const s: string = JSON.stringify(x);

  //   interface MyObj {
  //     _id: string,
  //     searchid: string,
  //     title: string,
  //     rent: string,
  //     lat: number,
  //     lon: number,
  //     images: Array<string>
  //   }

  //   const obj: MyObj = JSON.parse(s);
  //   return obj.images[0];
  // }

  ngOnInit() {
  }

}
