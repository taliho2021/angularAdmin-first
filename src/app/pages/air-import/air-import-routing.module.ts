import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirImportComponent } from './air-import.component';

const routes: Routes = [{ path: '', component: AirImportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirImportRoutingModule { }
