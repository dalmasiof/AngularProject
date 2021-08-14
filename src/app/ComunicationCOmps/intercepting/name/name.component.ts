import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  _name:string=""  

  @Input()
    set Name(name:string){  this._name="Your Name: "+ (name || "<name empty>")}

    get Name():string{  return this._name}

  constructor() { }

  ngOnInit(): void {
  }

}
