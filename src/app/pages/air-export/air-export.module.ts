import { AirExportComponent } from './air-export.component';
import { AirExportRoutingModule } from './air-export-routing.module';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AirExportComponent
  ],
  imports: [
    CommonModule,
    AirExportRoutingModule,
    MatTabsModule
  ]
})
export class AirExportModule { }
