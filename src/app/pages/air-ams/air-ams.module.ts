import { AirAmsComponent } from './air-ams.component';
import { AirAmsRoutingModule } from './air-ams-routing.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AirAmsComponent
  ],
  imports: [
    CommonModule,
    AirAmsRoutingModule,
    MatTabsModule,
    FlexLayoutModule
  ]
})
export class AirAmsModule { }
