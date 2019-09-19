import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public formGroupValidation: FormGroup;
  public genderList = []

  constructor(private formBuilder: FormBuilder) {
    this.genderList = ['Male', 'Femail', 'Other'];

    this.formGroupValidation = this.formBuilder.group({

      firstname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[A-Za-z]+$')
      ])),

      lastname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[A-Za-z]+$')
      ])),

      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16)
      ])),

      gender: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      phoneNo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ])),

      terms: new FormControl('', Validators.compose([
        Validators.required
      ]))

    })

  }

  error_message = {
    firstname: [
      { type: 'required', message: 'First Name is required.' },
      { type: 'pattern', message: 'Only alphabetical letters are allow.' }
    ],
    lastname: [
      { type: 'required', message: 'Last Name is required.' },
      { type: 'pattern', message: 'Only alphabetical letters are allow.' }
    ],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
      { type: 'maxlength', message: 'Password cannot be more than 16 characters long.' },
    ],
    gender: [
      { type: 'required', message: 'Gender is required.' },
    ],
    phoneNo: [
      { type: 'required', message: 'Phone Number is required.' },
      { type: 'pattern', message: 'Please enter a valid Phone Number.' },
      { type: 'minlength', message: 'Phone Number must be at least 10 characters long.' },
      { type: 'maxlength', message: 'Phone Number cannot be more than 10 characters long.' },
    ],
    terms: [
      { type: 'required', message: 'Accept the terms and Condictions.' },
    ]
  }


  onSubmit(formGroupValidation) {
    console.log('submit Data', formGroupValidation)
  }

}
