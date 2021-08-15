import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommunicationComponentComponent } from './ComunicationCOmps/communication-component/communication-component.component';
import { InputBindingComponent } from './ComunicationCOmps/input-binding/input-binding.component';
import { ClientComponentComponent } from './ComunicationCOmps/client-component/client-component.component';
import { EventComponent } from './ComunicationCOmps/event/event.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';



import { ChildComponent } from './ComunicationCOmps/event/child/child.component';
import { ClientsComponent } from './ComunicationCOmps/clients/clients.component';
import { FormsModule } from '@angular/forms';
import { ItemCLientComponent } from './ComunicationCOmps/clients/item-client/item-client.component';

import { NameChangesComponent } from './LifeCycleComps/on-change/name-changes/name-changes.component';
import { OnChangeComponent } from './LifeCycleComps/on-change/on-change/on-change.component';
import { InterceptingComponent } from './ComunicationCOmps/intercepting/intercepting.component';
import { NameComponent } from './ComunicationCOmps/intercepting/name/name.component';
import { MainLifeCycleComponent } from './LifeCycleComps/on-change/LifeCycle/main-life-cycle/main-life-cycle.component';
import { MatLineModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MmainLifeCicleChildComponent } from './LifeCycleComps/on-change/LifeCycle/mmain-life-cicle-child/mmain-life-cicle-child.component';
import { Module1Module } from './ServicesComps/module1/module1.module';
import { Module2Module } from './ServicesComps/module2/module2.module';
import { BasicObservablesComponent } from './Observables/basic-observables/basic-observables.component';
import { AsyncObervablesComponent } from './Observables/async-obervables/async-obervables.component';
import { SubjectsComponent } from './Observables/subjects/subjects.component';
import { SubjectChildComponent } from './Observables/subjects/subject-child/subject-child.component';
import { RxJsComponent } from './RXJSOperators/rx-js/rx-js.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BasicCreationComponent } from './RXJSOperators/basicCreation/basic-creation/basic-creation.component';
import { OperatorsComponent } from './RXJSOperators/operators/operators.component'
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AsyncComponent } from './RXJSOperators/async/async.component';
import { ErrorHandlingComponent } from './RXJSOperators/error-handling/error-handling.component';
import { UnsubscribeComponent } from './RXJSOperators/unsubscribe/unsubscribe.component'



@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponentComponent,
    InputBindingComponent,
    ClientComponentComponent,
    EventComponent,
    ChildComponent,
    ClientsComponent,
    ItemCLientComponent,
    NameChangesComponent,
    OnChangeComponent,
    InterceptingComponent,
    NameComponent,
    MainLifeCycleComponent,
    MmainLifeCicleChildComponent,
    BasicObservablesComponent,
    AsyncObervablesComponent,
    SubjectsComponent,
    SubjectChildComponent,
    RxJsComponent,
    BasicCreationComponent,
    OperatorsComponent,
    AsyncComponent,
    ErrorHandlingComponent,
    UnsubscribeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatOptionModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatLineModule,
    MatListModule,
    Module1Module,
    Module2Module,
    MatSlideToggleModule,
    FlexLayoutModule,
    MatRadioModule,
    MatDividerModule, 
    MatProgressBarModule

  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
