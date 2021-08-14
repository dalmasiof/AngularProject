import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})

export class Service1Service {

  public num1:number=0

  constructor() {
    this.num1 = Math.round(Math.random()*1000)
    console.log(this.num1+" Constructor svc1, module1, just one instance after creating")
   }


}
