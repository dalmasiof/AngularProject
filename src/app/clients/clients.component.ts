import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  name!:string
  age!:number

  clients:Client[]=[]
  constructor() { }

  ngOnInit(): void {
  }

  save(){ 
    this.clients.push({
      name:this.name,
      age:this.age
    })

    this.age=0
    this.name=""
  }

  removeFromList(index:number){
    this.clients.splice(index,1);
  }

  UpdateList(client:Client,index:number){
    this.clients[index].age = client.age;
    this.clients[index].name = client.name;

  }

}
