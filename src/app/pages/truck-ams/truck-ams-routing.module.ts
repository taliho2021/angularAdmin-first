import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TruckAmsComponent } from './truck-ams.component';

const routes: Routes = [{ path: '', component: TruckAmsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruckAmsRoutingModule { }
