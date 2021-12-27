import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackAndTraceComponent } from './track-and-trace.component';

const routes: Routes = [{ path: '', component: TrackAndTraceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackAndTraceRoutingModule { }
