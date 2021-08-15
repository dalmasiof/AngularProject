import { Component, OnInit } from '@angular/core';
import { throwError, timer } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, retry, retryWhen, tap } from 'rxjs/operators';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  startTest() {
    let obj: Observable<any> = new Observable<any>((obs) => {
      for (let i = 0; i < 10; i++) {
        if (i == 7) {
          obs.error(`Erro == ${i}`)
        }
        else {
          obs.next(`Executing: ${i}`)
        }
      }
    })
    obj.pipe(
      tap(i => "Befre error handling"),
      catchError(err => {
        console.error(err);
        return throwError("throw Error")
      }),
      // retry(2),
      retryWhen(i=>timer(5000))
    ).subscribe((x) => console.log(x),
      (err) => console.error(err),
      () => console.log("succes!!")
    )
  }

}
