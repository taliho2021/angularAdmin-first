import { RouterModule, Routes } from '@angular/router';

import { AirImportComponent } from './air-import/air-import.component';
import { NgModule } from '@angular/core';
import { TrackAndTraceComponent } from './track-and-trace.component';

const routes: Routes = [
  { path: '', component: TrackAndTraceComponent },
  { path: 'airImport', component: AirImportComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackAndTraceRoutingModule { }
