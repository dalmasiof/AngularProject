import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pageNotFOund/not-found/not-found.component';
import { RxJsComponent } from './RXJSOperators/rx-js/rx-js.component';


const routes: Routes = [
  { path: 'rxjs', component: RxJsComponent },
  {
    path: 'Services',
    loadChildren: () => import('./ServicesComps/module-services/module-services.module').then(m => m.ModuleServicesModule)//Lazy loading
  },
  
  // {path:'Services',component:Comp1Component},
  // {path:'Services2',component:Comp2Component},
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
