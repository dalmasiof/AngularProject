import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-async-obervables',
  templateUrl: './async-obervables.component.html',
  styleUrls: ['./async-obervables.component.css']
})
export class AsyncObervablesComponent implements OnInit {
  subscription!: Subscription
  subscription2!: Subscription

  n1 !: number
  n2 !: number
  s1: string = "Initializing..."
  s2: string = "Initializing..."

  constructor() { }

  ngOnInit(): void {
    const interval = new Observable(
      (observer: Observer<number>) => {
        let i = 0;;
        let id =setInterval(() => {
          i++;
          console.log("from Observable: " + i)
          if (i > 10) {
            observer.complete();
          }
          if (i % 2 == 0) {
            observer.next(i)
          }
        }, 1000);
        return ()=>{
          clearInterval(id)
        }
      }
    )

    this.subscription = interval.subscribe(
      n => { this.n1 = n },
      (err) => {
        console.log(err)
      },
      () => {
        this.s1="Complete 1 !"
      }
    )

    this.subscription2 = interval.subscribe(
      n => { this.n2 = n },
      (err) => {
        console.log(err)
      },
      () => {
        this.s2="Complete 2!"
      }
    )
  }

}
