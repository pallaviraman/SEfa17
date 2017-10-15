import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface PictureObj {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable()
export class PhotobucketService {
  myData: Array<any> = [];
  res: Object;

  constructor(private http: HttpClient) {
    this.http.get<PictureObj>('https://jsonplaceholder.typicode.com/photos')
    .subscribe(
      res => {
      this.res = res;
      [].push.apply(this.myData, res);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('client side error');
      } else {
        console.log('HTTP connection failed');
      }
    });
  }

}

