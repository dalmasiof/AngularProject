import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, delay, filter, first, last, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  searchInput!:string

  constructor() { }

  ngOnInit(): void {
  }

  mapCLick() {
    //map some resource thata you want, like multiply an array, or take mouse event and take only x and y postion of the object
    from([1, 2, 3, 4, 5, 6, 7])
      .pipe(
        map(y => {
          console.log(y * 2)
        })
      )
      .subscribe();

    fromEvent(document, 'click')
      .pipe(
        map((e: MouseEventInit) => ({ x: e.screenX, y: e.screenY }))
      )
      .subscribe((pos) => {
        console.log(pos)
      })
  }

  filterCLick() {
    //filter whats is goiing to show,
    from([1, 2, 3, 4, 5, 6, 7])
      .pipe(
        filter(y => y % 2 == 0)
      )
      .subscribe((x) => {
        console.log(x)
        //logging just pair numbers

      });
  }

  tapClick() {
    //see whats is passing in the operator, for logging or do some action
    interval(1000)
      .pipe(
        tap(x => console.log(`Before Filter: ${x}`)),
        //every number pass on this tap
        filter(y => y % 2 == 0),
        tap(x => console.log(`After Filter: ${x}`))
        //just pair number pass on here     
      )
      .subscribe((x) => {
        console.log(x)
        //logging just pair numbers
      });
  }

  takeClick() {
    //see whats is passing in the operator, for logging or do some action
   
    let n = 3;
    from([1, 2, 3, 4, 5, 6, 7]).pipe(
      // take(n)
      //take kill the observabe given a subscribe after n
      // last()
      //last kill the observabe given a subscribe after  last element
      first()
      //first kill the observabe given a subscribe after first element
    ).subscribe(v => console.log(v))

  }
  searchENtry$:Subject<string>= new Subject<string>()
  debounceClick(){

  }

  searchUsingDebounce(event:any){
    this.searchENtry$.next(event)
  }

  debounceTimeSeach(){
    this.searchENtry$.pipe(
      debounceTime(500)
    ).subscribe((x)=>console.log(x))
  }

}
