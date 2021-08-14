import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.css']
})
export class OnChangeComponent implements OnInit {

  Name!:string
  newName!:string
  constructor() { }

  ngOnInit(): void {
  }

  updateName(){
    this.newName=this.Name;
  }

}
