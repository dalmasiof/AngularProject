import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  clientForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    Location: new FormGroup({
      State: new FormControl(''),
      City: new FormControl('')
    })

  })
  constructor() { }

  ngOnInit(): void {
  }

  Submit() {
    console.log(this.clientForm.value)

    console.log(`
    First name ${this.clientForm.value.firstName},
    Last Name  ${this.clientForm.value.lastName},
    State ${this.clientForm.value.Location.State},
    City ${this.clientForm.value.Location.City}
    `)

    let objForm: ObjForm = this.clientForm.value

    console.log(`
    Transformig formValue in type object:
    First name ${objForm.firstName},
    Last Name  ${objForm.lastName},
    State ${objForm.Location.State},
    City ${objForm.Location.City}
    
    `)  }

}



export interface ObjForm {
  firstName: string
  lastName: string
  Location: {
    State: string
    City: string
  }
}
