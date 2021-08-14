import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {
  num: number = 0
  constructor() {

    this.num = Math.round(Math.random() * 1000)
    console.log(this.num + " Constructor service 2, APPModule, just one instance after creating")

  }
}
