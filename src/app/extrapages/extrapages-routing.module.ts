import { RouterModule, Routes } from '@angular/router';

import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { ExtrapagesComponent } from './extrapages.component';
import { NgModule } from '@angular/core';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', component: ExtrapagesComponent },
  { path: '404', component: Page404Component},
  { path: 'coming-soon', component: ComingsoonComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtrapagesRoutingModule { }
