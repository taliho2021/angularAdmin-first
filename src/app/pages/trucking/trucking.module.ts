import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruckingRoutingModule } from './trucking-routing.module';
import { TruckingComponent } from './trucking.component';


@NgModule({
  declarations: [
    TruckingComponent
  ],
  imports: [
    CommonModule,
    TruckingRoutingModule
  ]
})
export class TruckingModule { }
