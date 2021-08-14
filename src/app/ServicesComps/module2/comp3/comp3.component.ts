import { Component, OnInit } from '@angular/core';
import { Service3Service } from '../service3.service';

@Component({
  selector: 'app-comp3',
  providers:[
    Service3Service
  ],
  templateUrl: './comp3.component.html',

  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  num:number=0
  constructor(private _svc1:Service3Service) { }

  ngOnInit(): void {
    this.num=this._svc1.num3;
  }

}
