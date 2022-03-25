import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { NgModule } from '@angular/core';
import { TrackAndTraceComponent } from './track-and-trace.component';
import { TrackAndTraceRoutingModule } from './track-and-trace-routing.module';
import { AirImportComponent } from './air-import/air-import.component';

@NgModule({
  declarations: [
    TrackAndTraceComponent,
    AirImportComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    TrackAndTraceRoutingModule
  ]
})
export class TrackAndTraceModule { }
