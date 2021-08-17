import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reac-tive-forms',
  templateUrl: './reac-tive-forms.component.html',
  styleUrls: ['./reac-tive-forms.component.css']
})
export class ReacTiveFormsComponent implements OnInit {

  firstName = new FormControl('')
  lastName = new FormControl('')

  constructor() { }

  ngOnInit(): void {
    this.firstName.valueChanges.subscribe(x=>console.log(`First Name: ${x}`))
    this.lastName.valueChanges.subscribe(x=>console.log(`Last Name: ${x}`))

  }

  setName(){
    this.firstName.setValue("Dalmasio")
    this.lastName.setValue("Fernandes")

  }
}
