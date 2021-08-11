import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-name-changes',
  templateUrl: './name-changes.component.html',
  styleUrls: ['./name-changes.component.css']
})
export class NameChangesComponent implements OnInit,OnChanges {

  @Input() Name!:string
  nameBefore!:string

  constructor() { }

  ngOnInit(): void {
  }

  
  ngOnChanges(changes:{[propKey:string]: SimpleChange }){
    if(changes.hasOwnProperty("Name")){
      this.nameBefore = changes["Name"].previousValue
    }
    // console.log(changes)
  }
}
