import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {
  items: Array<any> = [];

  constructor() {
    this.items = [{name: 'assets/images/01.jpg'},
                  {name: 'assets/images/02.png'},
                  {name: 'assets/images/03.jpg'},
                  {name: 'assets/images/04.png'},
                  {name: 'assets/images/05.jpg'}
                ];
  }

  ngOnInit() {
  }

}
