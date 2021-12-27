import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeaAmsComponent } from './sea-ams.component';

const routes: Routes = [{ path: '', component: SeaAmsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeaAmsRoutingModule { }
