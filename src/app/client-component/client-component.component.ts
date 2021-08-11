import { Component, Input, OnInit } from '@angular/core';
import { CLientModel } from '../input-binding/clientModel';

@Component({
  selector: 'app-client-component',
  templateUrl: './client-component.component.html',
  styleUrls: ['./client-component.component.css']
})
export class ClientComponentComponent implements OnInit {

  @Input()
  client!: CLientModel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
