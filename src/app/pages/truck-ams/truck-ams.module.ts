import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruckAmsRoutingModule } from './truck-ams-routing.module';
import { TruckAmsComponent } from './truck-ams.component';


@NgModule({
  declarations: [
    TruckAmsComponent
  ],
  imports: [
    CommonModule,
    TruckAmsRoutingModule
  ]
})
export class TruckAmsModule { }
