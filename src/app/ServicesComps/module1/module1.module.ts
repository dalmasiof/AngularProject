import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Service1Service } from './service1.service';



@NgModule({
  declarations: [
    Comp1Component,
    Comp2Component
  ],
  exports: [Comp1Component,
    Comp2Component,
    
  ],
  imports: [
    CommonModule
  ]
})
export class Module1Module { }
