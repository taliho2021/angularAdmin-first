import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirExportRoutingModule } from './air-export-routing.module';
import { AirExportComponent } from './air-export.component';


@NgModule({
  declarations: [
    AirExportComponent
  ],
  imports: [
    CommonModule,
    AirExportRoutingModule
  ]
})
export class AirExportModule { }
