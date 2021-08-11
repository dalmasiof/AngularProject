import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() tittle:string=""

  @Output() outPutVal=new EventEmitter<any>();
 

  constructor() { }

  ngOnInit(): void {
  }

  btClick(valueBtn:number){
    this.outPutVal.emit(valueBtn)
  }

}
