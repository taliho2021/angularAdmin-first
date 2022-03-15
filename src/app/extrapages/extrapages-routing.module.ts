import { RouterModule, Routes } from '@angular/router';

import { AeFormComponent } from './ae-form/ae-form.component';
import { Chart01Component } from './chart01/chart01.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { ExtrapagesComponent } from './extrapages.component';
import { IsfFormComponent } from './isf-form/isf-form.component';
import { NgModule } from '@angular/core';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', component: ExtrapagesComponent },
  { path: '404', component: Page404Component},
  { path: 'coming-soon', component: ComingsoonComponent},
  { path: 'isf', component: IsfFormComponent },
  { path: 'ae', component: AeFormComponent},
  { path: 'chart01', component: Chart01Component}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtrapagesRoutingModule { }
