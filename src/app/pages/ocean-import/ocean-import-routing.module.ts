import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OceanImportComponent } from './ocean-import.component';

const routes: Routes = [{ path: '', component: OceanImportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OceanImportRoutingModule { }
