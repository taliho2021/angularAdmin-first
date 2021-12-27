import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomsBrokerageComponent } from './customs-brokerage.component';

const routes: Routes = [{ path: '', component: CustomsBrokerageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomsBrokerageRoutingModule { }
