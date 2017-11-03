import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lease-form',
  templateUrl: './lease-form.component.html',
  styleUrls: ['./lease-form.component.css']
})
export class LeaseFormComponent implements OnInit {
  FormTitle: string = 'Lease asset details';

  rForm: FormGroup;
  post: any;
  description: string = '';
  name: string = '';

  titleAlert: string = 'This field is required';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate': ''
    });
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }

  ngOnInit() {
    // this.rForm.get('validate').valueChanges.subscribe(

    //   (validate) => {
    //     if (validate === '1') {
    //       this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
    //       this.titleAlert = 'You need to specify at least 3 characters';
    //     } else {
    //       this.rForm.get('name').setValidators(Validators.required);
    //     }
    //     this.rForm.get('name').updateValueAndValidity();
    //   });
  }

}
