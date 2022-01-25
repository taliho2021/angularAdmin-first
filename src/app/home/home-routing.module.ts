import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../home/dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { Login02Component } from '../account/auth/login02/login02.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: Login02Component},
      { path: 'home', component: HomeComponent},
      { path: 'nav', component: NavigationComponent,
            children: [ { path:  'pages', loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule) }]},
      { path: 'dashboard', component: DashboardComponent} ,
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
