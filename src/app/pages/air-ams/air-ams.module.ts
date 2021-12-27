import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirAmsRoutingModule } from './air-ams-routing.module';
import { AirAmsComponent } from './air-ams.component';


@NgModule({
  declarations: [
    AirAmsComponent
  ],
  imports: [
    CommonModule,
    AirAmsRoutingModule
  ]
})
export class AirAmsModule { }
