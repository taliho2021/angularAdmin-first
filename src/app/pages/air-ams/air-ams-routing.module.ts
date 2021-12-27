import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirAmsComponent } from './air-ams.component';

const routes: Routes = [{ path: '', component: AirAmsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirAmsRoutingModule { }
