import { Component, OnInit } from '@angular/core';
import { Service2Service } from 'src/app/service2.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  num: number = 0
  constructor(private _svc2:Service2Service) { }

  ngOnInit(): void {
    this.num=this._svc2.num
  }

}
