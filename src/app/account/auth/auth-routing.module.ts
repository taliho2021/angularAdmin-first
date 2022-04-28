import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { RecoverpwdComponent } from './recoverpwd/recoverpwd.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'register'},
  { path: 'recoverpwd', component: RecoverpwdComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'register', component: RegisterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
