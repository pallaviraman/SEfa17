import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

import { SelectorComponent } from '../selector/selector.component';


@Component({
  selector: 'app-when-where',
  templateUrl: './when-where.component.html',
  styleUrls: ['./when-where.component.css']
})
export class WhenWhereComponent implements OnInit {
  public searchControl: FormControl;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor( private dialog: MatDialog) { }

  ngOnInit() {
    this.searchControl = new FormControl();
  }

  openDialog() {
    this.dialog.open(SelectorComponent);
  }

}
