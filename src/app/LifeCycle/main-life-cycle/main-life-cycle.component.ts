import { Component, OnInit } from '@angular/core';
import { CLient } from '../Client';

@Component({
  selector: 'app-main-life-cycle',
  templateUrl: './main-life-cycle.component.html',
  styleUrls: ['./main-life-cycle.component.css']
})
export class MainLifeCycleComponent implements OnInit {
  name!: string
  age!: number
  food!: string
  foods: string[] = ["Rice", "Beans", "Pizza"]
  editCLient: number = -1

  clients: CLient[] = []

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    if (this.editCLient == -1) {
      this.clients.push({ name: this.name, age: this.age, food: this.food })
      this.age=0
      this.name=""
      this.food=""
    }
    else {
      this.clients[this.editCLient].age = this.age
      this.clients[this.editCLient].food = this.food
      this.clients[this.editCLient].name = this.name
      this.editCLient = -1
    }
  }

  edit(i: number) {
    this.age = this.clients[i].age
    this.food = this.clients[i].food
    this.name = this.clients[i].name
    this.editCLient = i

  }

  remove(i: number) {
    debugger
    this.clients.splice(i,1);
  } 

}
