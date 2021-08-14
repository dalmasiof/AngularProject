import { Component, OnInit } from '@angular/core';
import { Service3Service } from '../service3.service';

@Component({
  selector: 'app-comp4',
  providers:[
    Service3Service
  ],
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {


  num:number=0
  constructor(private _svc3:Service3Service) { }

  ngOnInit(): void {
    this.num=this._svc3.num3;
  }

}
