import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.css']
})
export class RxJsComponent implements OnInit {
  option!: string

  constructor() { }

  ngOnInit(): void {
  }



}
