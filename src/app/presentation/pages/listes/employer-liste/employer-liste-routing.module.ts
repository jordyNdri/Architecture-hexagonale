import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployerListeComponent} from "./employer-liste.component";


const routes: Routes = [{ path: '', component: EmployerListeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerListeRoutingModule { }
