import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-basic-observables',
  templateUrl: './basic-observables.component.html',
  styleUrls: ['./basic-observables.component.css']
})
export class BasicObservablesComponent implements OnInit {

  constructor() {
     
   }

  ngOnInit(): void {
    //observables is for defaut syncronous process, see Observables/AsyncObservables to make async observables
    
    const   myObs= new Observable(
      ( observer:Observer<number>)=>{
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next(4);
        observer.next(5);
        // observer.error("deu erro");
        //observble stops on error, if uncoment line 24, method complete will not fire

        observer.complete();
      }
    )


    myObs.subscribe(
      (n:number)=>{
        console.log(n);
      },
      (error)=>{
        console.error(error);
      },
      ()=>{console.log("completed")}
    )
  }

}
