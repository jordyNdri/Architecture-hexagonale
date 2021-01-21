import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'employer-liste', pathMatch: 'full'},
  {
    path: 'employer-liste',
    loadChildren: () => import('./presentation/pages/listes/employer-liste/employer-liste.module').then(m => m.EmployerListeModule)
  },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
