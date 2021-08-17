import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './ComunicationCOmps/clients/clients.component';
import { EventComponent } from './ComunicationCOmps/event/event.component';
import { InputBindingComponent } from './ComunicationCOmps/input-binding/input-binding.component';
import { InterceptingComponent } from './ComunicationCOmps/intercepting/intercepting.component';
import { MainLifeCycleComponent } from './LifeCycleComps/on-change/LifeCycle/main-life-cycle/main-life-cycle.component';
import { NameChangesComponent } from './LifeCycleComps/on-change/name-changes/name-changes.component';
import { OnChangeComponent } from './LifeCycleComps/on-change/on-change/on-change.component';
import { AsyncObervablesComponent } from './Observables/async-obervables/async-obervables.component';
import { BasicObservablesComponent } from './Observables/basic-observables/basic-observables.component';
import { SubjectsComponent } from './Observables/subjects/subjects.component';
import { NotFoundComponent } from './pageNotFOund/not-found/not-found.component';
import { RxJsComponent } from './RXJSOperators/rx-js/rx-js.component';


const routes: Routes = [
  { path: 'rxjs', component: RxJsComponent },
  {
    path: 'Services',
    loadChildren: () => import('./ServicesComps/module-services/module-services.module').then(m => m.ModuleServicesModule)//Lazy loading
  },
  {
    path: 'CustomDirectives',
    loadChildren: () => import('./Directive/directives-colors/directives-colors.module').then(m => m.DirectivesColorsModule)//Lazy loading
  },
  {
    path: 'Forms',
    loadChildren: () => import('./Forms/forms-Module/forms.module').then(m => m.Form_Module)//Lazy loading
  },
  {
    path: 'Communication', children: [
      { path: 'Input', component: InputBindingComponent },
      { path: 'Event', component: EventComponent },
      { path: 'Intercepting', component: InterceptingComponent },
      { path: 'Clients', component: ClientsComponent },


    ]
  },
  {
    path: 'LifeCycle', children: [
      { path: 'Main', component: MainLifeCycleComponent },
      { path: 'NameChanges', component: NameChangesComponent },
      { path: 'OnChanges', component: OnChangeComponent },

    ]
  },
  {
    path: 'Observables', children: [
      { path: 'Async', component: AsyncObervablesComponent },
      { path: 'Basic', component: BasicObservablesComponent },
      { path: 'Subjects', component: SubjectsComponent },

    ]
  },

  // {path:'Services',component:Comp1Component},
  // {path:'Services2',component:Comp2Component},
  { path: '', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
