import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveColorDirective } from '../directive-color.directive';
import { CutomDireciveComponent } from '../cutom-direcive/cutom-direcive.component';
import { routerCustomDirectives } from './routerCustomDirectives';



@NgModule({
  declarations: [
    DirectiveColorDirective,
    CutomDireciveComponent
  ],
  imports: [
    CommonModule,
    routerCustomDirectives
  ]
})
export class DirectivesColorsModule { }
