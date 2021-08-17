import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  ClientFOrm = this.fb.group({
    firsName: [''],
    lastName: [''],
    address : this.fb.group(
      {
        state:[''],
        city:[ ''],
        street:['']
      }
    )

  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.ClientFOrm.value )
  }

}
