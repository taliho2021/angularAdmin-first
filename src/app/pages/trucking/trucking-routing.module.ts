import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TruckingComponent } from './trucking.component';

const routes: Routes = [{ path: '', component: TruckingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruckingRoutingModule { }
