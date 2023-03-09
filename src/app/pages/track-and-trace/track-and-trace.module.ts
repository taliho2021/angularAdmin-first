import { AirExportComponent } from './air-export/air-export.component';
import { AirImportComponent } from './air-import/air-import.component';
import { CommonModule } from '@angular/common';
import { EntriesComponent } from './entries/entries.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { NgModule } from '@angular/core';
import { OceanExportComponent } from './ocean-export/ocean-export.component';
import { OceanImportComponent } from './ocean-import/ocean-import.component';
import { TrackAndTraceComponent } from './track-and-trace.component';
import { TrackAndTraceRoutingModule } from './track-and-trace-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatChipsModule,
        TrackAndTraceRoutingModule,
        TrackAndTraceComponent,
        AirImportComponent,
        AirExportComponent,
        OceanImportComponent,
        OceanExportComponent,
        EntriesComponent
    ]
})
export class TrackAndTraceModule {}
