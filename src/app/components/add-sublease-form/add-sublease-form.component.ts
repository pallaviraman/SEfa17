import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { DatepickerOptions } from 'ng2-datepicker';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { HouseListingService } from '../../house-listing.service';
import { BasicDetails } from '../../subleaseForm01';


const URL = 'http://174.64.102.57:3000/leasemetadata';

@Component({
  selector: 'app-add-sublease-form',
  templateUrl: './add-sublease-form.component.html',
  styleUrls: ['./add-sublease-form.component.css']
})

export class AddSubleaseFormComponent implements OnInit {
  numArray: Array<number> = [1, 2, 3, 4, 5];
  filesToUpload: Array<File> = [];

  selectedValue: string;

    numArray1 = [
      {value: 'option-1', viewValue: '1'},
      {value: 'option-2', viewValue: '2'},
      {value: 'option-3', viewValue: '3'},
      {value: 'option-4', viewValue: '4'},
      {value: 'option-5', viewValue: '5'},
    ];

    numArray2 = [
      {value: 'option-1', viewValue: '1'},
      {value: 'option-2', viewValue: '2'},
      {value: 'option-3', viewValue: '3'},
      {value: 'option-4', viewValue: '4'},
      {value: 'option-5', viewValue: '5'},
    ];

    numArray3 = [
      {value: 'option-1', viewValue: '1'},
      {value: 'option-2', viewValue: '2'},
      {value: 'option-3', viewValue: '3'},
      {value: 'option-4', viewValue: '4'},
      {value: 'option-5', viewValue: '5'},
    ];


    numArray4 = [
      {value: 'option-1', viewValue: '1'},
      {value: 'option-2', viewValue: '2'},
      {value: 'option-3', viewValue: '3'},
      {value: 'option-4', viewValue: '4'},
      {value: 'option-5', viewValue: '5'},
    ];


  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  date: Date  = new Date();

  res_id: string;

  model = new BasicDetails('', '', '', '', '', '','', '', '', true, false, true, false, true, true,
    true, false, true, true, false, true, true, true, true, true, true);

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;

  public searchControl: FormControl;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private data: HouseListingService) {
    // this.http.post('http://jsonplaceholder.typicode.com/posts', this.data).subscribe();
  }

  ngOnInit() {
//  interface ResponseInterface {
//   _id: string;
//  }

    // const req = this.http.post<ResponseInterface>('http://70.171.46.158:3000/add', this.model)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.http.get('http://70.171.46.158:3000').subscribe(
    //         res1 => {
    //           console.log(res1);
    //         },
    //         err1 => {
    //           console.log(err1);
    //         }
    //       );
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   );

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };
    this.searchControl = new FormControl();

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

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for (let i = 0; i < files.length; i++) {
        formData.append('uploads[]', files[i], files[i]['name']);
    }

    formData.append('rent', 500);
    formData.append('lat', 39);
    formData.append('lon', 80);
    formData.append('startdate', '2017-08');
    formData.append('enddate', '2018-03');
    formData.append('searchid', '1234');
    formData.append('title', 'sefwefwe');

    console.log('form data variable :   ' + formData.toString());
    // formData.append("uploads[]", files[0], files[0]['name']);
    // this.address.documents = files.toString();

        this.http.post(URL, formData)
        .subscribe(files1 => console.log('files', files1))
}

    fileChangeEvent(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
    }

  onDateInput() {
    console.log(this.date);
   }

  onDateChange() { }

  // onSubmit() {
  //   interface ResponseInterface {
  //     _id: string;
  //    }

  //   const req = this.http.post<ResponseInterface>('http://174.64.102.57:3000/add', this.model)
  //   .subscribe(
  //     res => {
  //       console.log(res);
  //       this.http.get('http://174.64.102.57:3000').subscribe(
  //         res1 => {
  //           console.log(res1);
  //         },
  //         err1 => {
  //           console.log(err1);
  //         }
  //       );
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
  // TODO: Remove this when we're done

  // get diagnostic() { return JSON.stringify(this.model); }
}
