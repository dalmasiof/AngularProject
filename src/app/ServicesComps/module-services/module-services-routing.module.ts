import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from '../module1/comp1/comp1.component';
import { Comp2Component } from '../module1/comp2/comp2.component';

const routes: Routes = [
   {path:'',component:Comp1Component},
  {path:'Services2',component:Comp2Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleServicesRoutingModule { }
