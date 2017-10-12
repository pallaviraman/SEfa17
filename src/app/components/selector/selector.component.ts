import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  flatmates: number = 0;
  pets: number = 0;

  constructor() { }

  increaseCount( ) {
    this.flatmates += 1;
  }

  decreaseCount() {
    this.flatmates -= 1;
  }

  ngOnInit() {
  }
}
