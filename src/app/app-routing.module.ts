import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { ModuleWithProviders, NgModule } from '@angular/core';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'maps',
    component: MapsComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
