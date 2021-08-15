import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  options$:Observable<string[]> = new Observable<string[]>()
  // options$ = new Observable()

  constructor() { }

  ngOnInit(): void {
    
    setInterval(()=>{
      this.options$ = new Observable<string>(obs=>{
        for(let i =0;i<8;i++){
     
              obs.next(`Option: ${i}`)
            }
            obs.complete()
      }).pipe(
        toArray()
      )
    },3000)
   
   

    // this.options$.subscribe((x)=>{console.log(x)})
  }

}
