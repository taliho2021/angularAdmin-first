import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OceanExportRoutingModule } from './ocean-export-routing.module';
import { OceanExportComponent } from './ocean-export.component';


@NgModule({
  declarations: [
    OceanExportComponent
  ],
  imports: [
    CommonModule,
    OceanExportRoutingModule
  ]
})
export class OceanExportModule { }
