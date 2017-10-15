import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MapModifierService {
  private latSource = new BehaviorSubject<number>(0.00);
  currentLat = this.latSource.asObservable();


  constructor () {

  }

  changeLat(lat: number) {
    this.latSource.next(lat);
  }

}
