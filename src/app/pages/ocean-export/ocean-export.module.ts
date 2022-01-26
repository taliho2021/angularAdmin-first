import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { OceanExportComponent } from './ocean-export.component';
import { OceanExportRoutingModule } from './ocean-export-routing.module';
import { OceanExportDetailComponent } from './ocean-export-detail/ocean-export-detail.component';
import { OceanExportSummaryComponent } from './ocean-export-summary/ocean-export-summary.component';

@NgModule({
  declarations: [
    OceanExportComponent,
    OceanExportDetailComponent,
    OceanExportSummaryComponent
  ],
  imports: [
    CommonModule,
    OceanExportRoutingModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class OceanExportModule { }
