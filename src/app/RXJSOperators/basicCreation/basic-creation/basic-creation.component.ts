import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Observable, Observer, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.css']
})
export class BasicCreationComponent implements OnInit {

  subscription:Subscription = new Subscription()
  constructor() { }

  ngOnInit(): void {
  }

  observableCreate(){
    // const hello =  Observable.create((obs:Observer<any>)=>{
    //   obs.next("Hello")
    //   obs.next("From")
    //   obs.next("Observer")
    //   obs.complete()


    // }); old observble style

    // hello.subscribe(t=>console.log(t))
  }

  fromCLick(){
    from([1,2,3,4,{x:1,y:2}]).subscribe(obse=>{
      console.log(obse)//next with every element
    })
  }

  offCLick(){
    of([1,2,3,4,{x:1,y:2}]).subscribe(obse=>{
      console.log(obse)//print all in the same time
    })
  }

  intervalCLick(){
    
    this.subscription.add(interval(1000).subscribe(inter=>{
      console.log(inter);
    }))
  }

  timerCLick(){
    //const source = timer(1000) execute one time and stop
    const source = timer(1000,3000)// wait time to execute  

    this.subscription.add(source.subscribe(x=>{console.log(x)}))
  }

  UnsubscribeCLick(){
    this.subscription.unsubscribe()
    this.subscription = new Subscription()
  }

  fromEventClick(){
    const subromEvent= fromEvent(document,'click')//ccan select every elemnt of html
    
    this.subscription.add(subromEvent.subscribe(x=>{
      console.log("CLicks event: "+x)
    }))

  }

}
