import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'login', component: LoginComponent },
  // { path: 'client/add', component: AddClientComponent},
  // { path: 'client/edit/:id', component: EditClientComponent},
  // { path: 'client/:id', component: ClientDetailsComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
