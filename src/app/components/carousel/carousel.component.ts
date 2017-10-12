import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  myData: Array<any> = [];
  res: Object;
  imgUrl: string = 'https://source.unsplash.com/random/800x600';
  urlCounter: number = 0;

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
    .subscribe(res => {
      this.res = res;
      [].push.apply(this.myData, res);
    });

    setInterval((): void => {
      this.imgUrl = this.extractURL(this.myData[this.urlCounter]);
      this.urlCounter++;
      this.urlCounter %= 10;
      console.log(this.urlCounter);
      console.log(this.imgUrl);
    }, 3000);
   }

   extractURL(x: object): string {
    const s: string = JSON.stringify(x);

    interface MyObj {
      albumId: number;
      id: number;
      title: string;
      url: string;
      thumbnailUrl: string;
    }

    const obj: MyObj = JSON.parse(s);
    return obj.url;
  }
  ngOnInit() {
  }

}
