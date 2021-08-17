import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { ReacTiveFormsComponent } from './reac-tive-forms/reac-tive-forms.component';

const routes: Routes = [
  {path:"ReaciveForm",component:ReacTiveFormsComponent},
  {path:"FormBuilder",component:FormBuilderComponent},
  {path:"FormArray",component:FormArrayComponent},
  {path:"FormGroup",component:FormGroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
