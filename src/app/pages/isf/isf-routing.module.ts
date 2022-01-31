import { RouterModule, Routes } from '@angular/router';

import { IsfComponent } from './isf.component';
import { IsfDetailComponent } from './isf-detail/isf-detail.component';
import { NgModule } from '@angular/core';
import { identifierName } from '@angular/compiler';

const routes: Routes = [
  { path: '', component: IsfComponent },
  { path: ':id', component: IsfDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IsfRoutingModule { }
