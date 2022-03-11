import { RouterModule, Routes } from '@angular/router';

import { CustomsBrokerageComponent } from './customs-brokerage.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: CustomsBrokerageComponent },
  { path: 'detail/:id', component: EntryDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomsBrokerageRoutingModule { }
