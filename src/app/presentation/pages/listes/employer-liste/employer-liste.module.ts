import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerListeRoutingModule } from './employer-liste-routing.module';
import {EmployerListeComponent} from "./employer-liste.component";


@NgModule({
  declarations: [EmployerListeComponent],
  imports: [
    CommonModule,
    EmployerListeRoutingModule
  ]
})
export class EmployerListeModule { }
