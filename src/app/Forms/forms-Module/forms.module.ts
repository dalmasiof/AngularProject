import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
// import { MatRadioModule } from '@angular/material/o';

import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReacTiveFormsComponent } from './reac-tive-forms/reac-tive-forms.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormArrayComponent } from './form-array/form-array.component';








@NgModule({
  declarations: [
    
  
    ReacTiveFormsComponent,
            FormGroupComponent,
            FormBuilderComponent,
            FormArrayComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsRoutingModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule, 
      MatIconModule,
      MatButtonModule,
      ReactiveFormsModule
    
  ]
})
export class Form_Module { }
