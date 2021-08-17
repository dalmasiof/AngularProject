import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CutomDireciveComponent } from "../cutom-direcive/cutom-direcive.component";

const routes: Routes = [
    {path:"DirectiveColor",component:CutomDireciveComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class routerCustomDirectives { }