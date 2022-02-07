import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { OceanExportComponent } from './ocean-export.component';
import { OceanExportDetailComponent } from './ocean-export-detail/ocean-export-detail.component';
import { OceanExportRoutingModule } from './ocean-export-routing.module';
import { OceanExportSummaryComponent } from './ocean-export-summary/ocean-export-summary.component';
import { OeGridComponent } from './oe-grid/oe-grid.component';

@NgModule({
  declarations: [
    OceanExportComponent,
    OceanExportDetailComponent,
    OceanExportSummaryComponent,
    OeGridComponent
  ],
  imports: [
    CommonModule,
    OceanExportRoutingModule,
    MatTabsModule,
    MatCardModule,
    AgGridModule
  ]
})
export class OceanExportModule { }
