import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  tittle="Titulo"
  value:number= 0
  constructor() { }

  ngOnInit(): void {
  }

  incBy(value:number){
    this.value += value;
  }

}
