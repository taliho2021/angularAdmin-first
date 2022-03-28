import { RouterModule, Routes } from '@angular/router';

import { AirExportComponent } from './air-export/air-export.component';
import { AirImportComponent } from './air-import/air-import.component';
import { EntriesComponent } from './entries/entries.component';
import { NgModule } from '@angular/core';
import { OceanExportComponent } from './ocean-export/ocean-export.component';
import { OceanImportComponent } from './ocean-import/ocean-import.component';
import { TrackAndTraceComponent } from './track-and-trace.component';

const routes: Routes = [
  { path: '', component: TrackAndTraceComponent, children: [
      { path: 'airImport', component: AirImportComponent},
      { path: 'airExport', component: AirExportComponent},
      { path: 'oceanImport', component: OceanImportComponent},
      { path: 'oceanExport', component: OceanExportComponent},
      { path: 'entries', component: EntriesComponent}
  ],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackAndTraceRoutingModule { }
