import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackAndTraceRoutingModule } from './track-and-trace-routing.module';
import { TrackAndTraceComponent } from './track-and-trace.component';


@NgModule({
  declarations: [
    TrackAndTraceComponent
  ],
  imports: [
    CommonModule,
    TrackAndTraceRoutingModule
  ]
})
export class TrackAndTraceModule { }
