import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './helpers/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Login02Component } from './account/auth/login02/login02.component';
import { NgModule } from '@angular/core';
import { Page404Component } from './extrapages/page404/page404.component';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'extra-pages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule)},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'home', component: Login02Component},
  { path: 'home1', loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)},
  { path:  'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: '**', component: Page404Component }];


  @NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
