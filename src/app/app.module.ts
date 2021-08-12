import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommunicationComponentComponent } from './communication-component/communication-component.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ClientComponentComponent } from './client-component/client-component.component';
import { EventComponent } from './event/event.component';
import{ MatCardModule} from '@angular/material/card';
import{ MatButtonModule} from '@angular/material/button';
import{ MatIconModule} from '@angular/material/icon';
import{ MatFormFieldModule} from '@angular/material/form-field';
import{ MatInputModule} from '@angular/material/input';


import { ChildComponent } from './event/child/child.component';
import { ClientsComponent } from './clients/clients.component';
import { FormsModule } from '@angular/forms';
import { ItemCLientComponent } from './clients/item-client/item-client.component';

import { NameChangesComponent } from './on-change/name-changes/name-changes.component';
import { OnChangeComponent } from './on-change/on-change/on-change.component';
import { InterceptingComponent } from './intercepting/intercepting.component';
import { NameComponent } from './intercepting/name/name.component';
import { MainLifeCycleComponent } from './LifeCycle/main-life-cycle/main-life-cycle.component';
import { MatLineModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MmainLifeCicleChildComponent } from './LifeCycle/mmain-life-cicle-child/mmain-life-cicle-child.component';


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
    MatListModule

    
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
