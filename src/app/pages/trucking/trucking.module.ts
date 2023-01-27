import {
  MatGridAvatarCssMatStyler,
  MatGridListModule,
} from '@angular/material/grid-list';

import { AirComponent } from './air/air.component';
import { CommonModule } from '@angular/common';
import { FclComponent } from './fcl/fcl.component';
import { LclComponent } from './lcl/lcl.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { TruckingComponent } from './trucking.component';
import { TruckingRoutingModule } from './trucking-routing.module';

@NgModule({
  declarations: [TruckingComponent, AirComponent, FclComponent, LclComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    TruckingRoutingModule,
  ],
})
export class TruckingModule {}
