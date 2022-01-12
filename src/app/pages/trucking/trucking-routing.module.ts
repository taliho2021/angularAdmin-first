import { RouterModule, Routes } from '@angular/router';

import { AirComponent } from './air/air.component';
import { FclComponent } from './fcl/fcl.component';
import { LclComponent } from './lcl/lcl.component';
import { NgModule } from '@angular/core';
import { TruckingComponent } from './trucking.component';

const routes: Routes = [{ path: '', component: TruckingComponent,
                          children: [
                            {path: 'air', component: AirComponent},
                            {path: 'lcl', component: LclComponent},
                            {path: 'fcl', component: FclComponent}
                          ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruckingRoutingModule { }
