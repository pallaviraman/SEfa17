import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Under Construction';
  myData: Array<any> = [];
  res: Object;

    constructor(private http: HttpClient) {

      this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe(res => {
        this.res = res;
        [].push.apply(this.myData, res);
      });
    }
}
