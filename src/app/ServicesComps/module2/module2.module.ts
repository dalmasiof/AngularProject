import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Service3Service } from './service3.service';



@NgModule({
  declarations: [
    Comp3Component,
    Comp4Component
  ],
  
  exports: [
    Comp3Component,
    Comp4Component
  ],
  imports: [
    CommonModule
  ]
})
export class Module2Module { }
