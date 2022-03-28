import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { NgModule } from '@angular/core';
import { TrackAndTraceComponent } from './track-and-trace.component';
import { TrackAndTraceRoutingModule } from './track-and-trace-routing.module';
import { AirImportComponent } from './air-import/air-import.component';
import { AirExportComponent } from './air-export/air-export.component';
import { OceanImportComponent } from './ocean-import/ocean-import.component';
import { OceanExportComponent } from './ocean-export/ocean-export.component';
import { EntriesComponent } from './entries/entries.component';

@NgModule({
  declarations: [
    TrackAndTraceComponent,
    AirImportComponent,
    AirExportComponent,
    OceanImportComponent,
    OceanExportComponent,
    EntriesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    TrackAndTraceRoutingModule
  ]
})
export class TrackAndTraceModule { }
