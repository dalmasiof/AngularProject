import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  ClientFOrm = this.fb.group({
    firsName: [''],
    lastName: [''],
    address: this.fb.group(
      {
        state: [''],
        city: [''],
        street: ['']
      }
    ),
    phones: this.fb.array(['']),
    children: this.fb.array([])
  })

  phones =  this.ClientFOrm.get('phones') as FormArray
  children =  this.ClientFOrm.get('children') as FormArray


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(
      this.ClientFOrm.value
    )
  }

  addPhone(){
    this.phones.push(this.fb.control(''))
  }

  addChild(){
    this.children.push(
      this.fb.group({
        name:[''],
        age:['']
      }
      )
    )
  }
  

}
