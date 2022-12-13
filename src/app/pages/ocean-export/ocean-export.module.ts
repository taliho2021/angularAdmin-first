import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { NgModule } from '@angular/core';
import { OceanExportComponent } from './ocean-export.component';
import { OceanExportDashboardComponent } from './ocean-export-dashboard/ocean-export-dashboard.component';
import { OceanExportDetailComponent } from './ocean-export-detail/ocean-export-detail.component';
import { OceanExportRoutingModule } from './ocean-export-routing.module';
import { OceanExportSummaryComponent } from './ocean-export-summary/ocean-export-summary.component';
import { OeGridComponent } from './oe-grid/oe-grid.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  declarations: [
    OceanExportComponent,
    OceanExportDetailComponent,
    OceanExportSummaryComponent,
    OeGridComponent,
    OceanExportDashboardComponent
  ],
  imports: [
    CommonModule,
    OceanExportRoutingModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    AgGridModule,
    WidgetsModule
  ]
})
export class OceanExportModule { }
