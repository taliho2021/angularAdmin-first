import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OceanExportComponent } from './ocean-export.component';

const routes: Routes = [{ path: '', component: OceanExportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OceanExportRoutingModule { }
