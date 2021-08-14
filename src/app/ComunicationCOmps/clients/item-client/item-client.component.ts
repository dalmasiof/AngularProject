import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemCLientComponent implements OnInit {

  @Input() client!:Client
  @Output() updateCLient= new EventEmitter<Client>();
  @Output() removeCLient= new EventEmitter<any>();

  
  isEdit:boolean = false 

  name!:string
  age!:number

  constructor() { }

  ngOnInit(): void {
    debugger
    console.log(this.client)
  }

  edit(){
    this.isEdit=true
    this.name=this.client.name
    this.age = this.client.age;
  }

  delete()
  {
    this.isEdit=false;

    this.removeCLient.emit()
  }

  save(){
    this.isEdit=false;
    this.updateCLient.emit({
      name:this.name,age:this.age
    })
  }

}
