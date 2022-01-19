import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { TruckAmsComponent } from './truck-ams.component';
import { TruckAmsRoutingModule } from './truck-ams-routing.module';

@NgModule({
  declarations: [
    TruckAmsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    TruckAmsRoutingModule
  ]
})
export class TruckAmsModule { }
