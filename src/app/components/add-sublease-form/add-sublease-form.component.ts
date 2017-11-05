import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { BasicDetails } from './subleaseForm01';
import { DatepickerOptions } from 'ng2-datepicker';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

const URL = 'http://localhost:8000/api/upload';

@Component({
  selector: 'app-add-sublease-form',
  templateUrl: './add-sublease-form.component.html',
  styleUrls: ['./add-sublease-form.component.css']
})

export class AddSubleaseFormComponent implements OnInit {
  numArray: Array<number> = [1, 2, 3, 4, 5];
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  date: Date;

  submitted: boolean = false;

  // options: DatepickerOptions = {
  //   minYear: 1970,
  //   maxYear: 2030,
  //   displayFormat: 'MMM D[,] YYYY',
  //   barTitleFormat: 'MMMM YYYY',
  //   firstCalendarDay: 1, // 0 - Sunday, 1 - Monday
  // };

  model = new BasicDetails('abc', '342342354', 'ikabefoiuiuhoawefd oihoef oihwdoa wsfdo i', 'abc', 'fef,efwef', '342342354',
    'ikabefoiuiuhoawefd oihoef oihwdoa wsfdo i', 'edfsef', 'dfsf', true, true, true, true, true, true,
    true, true, true, true, true, true, true, true, true, true, true);

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;

  public searchControl: FormControl;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private _formBuilder: FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
  }

  ngOnInit() {
    this.date = new Date();

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };
    this.searchControl = new FormControl();

    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
  }

  onDateInput() {
    console.log(this.date);
   }
  onDateChange() { }

  onSubmit() {
    this.submitted = true;
    console.log(JSON.stringify(this.model));
    // this.model = new BasicDetails(this.title1, this.location1, this.zipcode1, this.description1);
  }
  // TODO: Remove this when we're done

  get diagnostic() { return JSON.stringify(this.model); }
}
