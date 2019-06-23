import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MapsComponent } from './components/maps/maps.component';
import { RegisterComponent } from './components/register/register.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'maps',
    component: MapsComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Registro' }
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent,
    data: { title: 'Redefinição de Senha' }
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    data: { title: 'Alteração de perfil' }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
