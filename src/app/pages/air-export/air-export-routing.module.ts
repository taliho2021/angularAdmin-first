import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirExportComponent } from './air-export.component';

const routes: Routes = [{ path: '', component: AirExportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirExportRoutingModule { }
