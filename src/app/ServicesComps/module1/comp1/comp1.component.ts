import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  num:number=0
  constructor(private _svc1:Service1Service) { }

  ngOnInit(): void {
    this.num=this._svc1.num1;
  }

}
