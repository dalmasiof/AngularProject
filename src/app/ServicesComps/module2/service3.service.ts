import { Injectable } from '@angular/core';

@Injectable()
export class Service3Service {

  public num3:number=0

  constructor() {
    this.num3 = Math.round(Math.random()*1000)
    console.log(this.num3 + " Constructor service 3, Module2, Provider om component so make many instance when compnent is called")

   }
}
