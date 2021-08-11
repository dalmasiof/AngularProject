import { Component, Input, OnInit } from '@angular/core';
import { CLientModel } from './clientModel';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() name:string=""
  @Input() lastName:string=""
  @Input() age:number=0

  clients:CLientModel[]=[]

  constructor() {
    this.clients=[{
      age:23,
      id:1,
      name:"Dalmasio"
    },
    {
      age:25,
      id:2,
      name:"Mathias"
    },
    {
      age:27,
      id:3,
      name:"William"
    },
    {
      age:14,
      id:4,
      name:"João"
    },
  ]

   }

  ngOnInit(): void {
  }

}
