import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication-component',
  templateUrl: './communication-component.component.html',
  styleUrls: ['./communication-component.component.css']
})
export class CommunicationComponentComponent implements OnInit {

  age:number=23
  constructor() { }

  ngOnInit(): void {
  }

}
