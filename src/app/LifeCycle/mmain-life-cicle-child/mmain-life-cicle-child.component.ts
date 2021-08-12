import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CLient } from '../Client';

@Component({
  selector: 'app-mmain-life-cicle-child',
  templateUrl: './mmain-life-cicle-child.component.html',
  styleUrls: ['./mmain-life-cicle-child.component.css']
})
export class MmainLifeCicleChildComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterViewInit {

  @Input() name!: string
  @Input() age!: number
  @Input() food!: string
  CLient!: CLient

  constructor() {
    console.log("Name: " + this.name + " constructor")
    //Never use variables in constructo, they dont exist at this moment, use oly for dependence injection
  }

  ngAfterContentInit(): void {
    console.log("Name: " + this.name + " ngAfterContentInit")
  }
  ngAfterViewInit(): void {
    console.log("Name: " + this.name + " ngAfterViewInit")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Name: "+this.name+" ngOnChanges")

  }
  ngOnDestroy(): void {
    console.log("Name: "+this.name+" ngOnDestroy")

  }

  ngOnInit(): void {
  }

}
