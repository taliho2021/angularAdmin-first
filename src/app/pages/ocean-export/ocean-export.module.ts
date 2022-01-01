import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { OceanExportComponent } from './ocean-export.component';
import { OceanExportRoutingModule } from './ocean-export-routing.module';

@NgModule({
  declarations: [
    OceanExportComponent
  ],
  imports: [
    CommonModule,
    OceanExportRoutingModule,
    MatTabsModule
  ]
})
export class OceanExportModule { }
