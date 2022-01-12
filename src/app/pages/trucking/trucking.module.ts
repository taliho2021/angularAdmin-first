import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TruckingComponent } from './trucking.component';
import { TruckingRoutingModule } from './trucking-routing.module';

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
