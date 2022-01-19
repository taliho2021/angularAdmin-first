import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { TrackAndTraceComponent } from './track-and-trace.component';
import { TrackAndTraceRoutingModule } from './track-and-trace-routing.module';

@NgModule({
  declarations: [
    TrackAndTraceComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    TrackAndTraceRoutingModule
  ]
})
export class TrackAndTraceModule { }
