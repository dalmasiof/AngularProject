import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {


  clientForm = this.fb.group({
    firstName: ['',
      [
        Validators.required,
        Validators.minLength(5)
      ]],
    lastName: [''],
    birth: [new Date()],
    age: [0],
    email: [''],
    street: [''],
    city: [''],
    state: [''],
    phone1: [''],
    phone2: [''],
  });



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
